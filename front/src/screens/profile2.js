import React from 'react'
import { Image, SafeAreaView, StyleSheet, View, Dimensions} from 'react-native'
import { Divider, Icon, Text, Avatar, SearchBar} from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';
import NbaPlayer from '../nbaPlayer';

const Layout = {"window": {}};
Layout.window.width = Dimensions.get('window').width
Layout.window.height = Dimensions.get('window').height

const teams = require("../../nbaTeams.json")

class ProfileScreen extends React.Component {
  constructor(name) {
    super();
    this.state = { playerName: "Lamelo Ball",
      player: {},
      playerTeam: {},
      pic: "",
    };
  }
  componentDidMount() {
      //console.log(teams)
    (async () => {
      this.state.player = await NbaPlayer(this.state.playerName);
      //console.log("uai:")
      console.log(await NbaPlayer(this.state.playerName));
      console.log("player: ");
      console.log(this.state.player);
      this.state.playerTeam = getTeam(this.state.player.commonPlayerInfo[0].teamId );
      function getTeam(teamId){
        return teams.find((team) => { return team.teamId == teamId});
      }
      this.state.pic =   "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/" +this.state.player.commonPlayerInfo[0].teamId + "/2021/260x190/" + this.state.player.commonPlayerInfo[0].personId + ".png";
                          // https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612757/2021/260x190/1629014.png
                          // https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612760/2021/260x190/1630544.png
                          // https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612762/2021/260x190/1628378.png
      console.log("team: ");
      console.log(this.state.playerTeam)
    })();
  }
  render() {
    let table = {
      tableHead: ['PPG', 'RPG', 'APG', 'PIE'],
      tableData: [
        ['19.8 ', '7.1 ', '7.5 ', '13.2 '],
      ]
    }
    if(this.state.player.playerHeadlineStats){
      table = {
        tableHead: ['PTS', 'REB', 'AST', 'PIE'],
        tableData: [
          [this.state.player.playerHeadlineStats[0].pts,
           this.state.player.playerHeadlineStats[0].reb,
           this.state.player.playerHeadlineStats[0].ast,
           this.state.player.playerHeadlineStats[0].pie],
        ]
      }
    }
    function getPlayerName(player){
      if(player.commonPlayerInfo)
        return player.commonPlayerInfo[0].displayFirstLast;
      else return "";
    }
    function getPlayerTeamName(player){
      if(player.commonPlayerInfo)
        return player.commonPlayerInfo[0].teamName;
      else return "";
    }
    console.log("antes do title:");
    console.log(this.state.player);
    //const title = this.state.player.commonPlayerInfo[0].displayFirstLast;
    const title = getPlayerName(this.state.player);
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar ref={search => this.search = search} inputStyle={{backgroundColor: 'white'}}
    containerStyle={{backgroundColor: 'white', borderWidth: 0, borderRadius: 0}}
              inputContainerStyle={{backgroundColor: 'white'}}
    placeholderTextColor={'#g5g5g5'}/>
        <View style={styles.imageContainer}>
          <Avatar
            size={64}
            rounded
            source={this.state.pic} >
          </Avatar>

        <Text h4 style={styles.name}>
          {getPlayerName(this.state.player)} <br />
          {getPlayerTeamName(this.state.player)}
        </Text>
        </View>
        <Divider style={styles.divider} />
        <Text style={styles.desc}>
        </Text>

        <View styel={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={table.tableHead} style={styles.table_head} textStyle={styles.table_text}/>
            <Rows data={table.tableData} textStyle={styles.table_text}/>
          </Table>
        </View>
        <Divider style={styles.divider} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    width: 600,
  },
  table_table: { width: 200, flex: 1, padding: 6, paddingTop: 30, backgroundColor: '#ffffff' },
  table_head: { height: 40, backgroundColor: '#f1f8ff' },
  table_text: { margin: 10 },
  imageContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'left'
  },
  image: {
    width: Layout.window.width - 60,
    height: Layout.window.height / 2 - 60,
    borderRadius: 20,
  },
  name: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  desc: {
    color: '#5E5E5E',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginHorizontal: 30,
    fontSize: 14,
  },
  divider: {
    backgroundColor: '#C0C0C0',
    width: Layout.window.width - 60,
    margin: 20,
  },
  socialLinks: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: Layout.window.width,
    marginLeft: 40,
  },
  iconContainer: {
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
})

export default ProfileScreen
