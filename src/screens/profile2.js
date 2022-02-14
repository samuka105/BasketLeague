import React from 'react'
import { Image, SafeAreaView, StyleSheet, View, Dimensions} from 'react-native'
import { Divider, Icon, Text, Avatar } from 'react-native-elements'
import { Table, Row, Rows } from 'react-native-table-component';

const Layout = {"window": {}};
Layout.window.width = Dimensions.get('window').width
Layout.window.height = Dimensions.get('window').height


const playerName = 'Stephen Curry';
const teams = require("../../nbaTeams.json")
console.log(teams)

const NBA = require("nba");
  const player = NBA.findPlayer(playerName);
//const team = NBA.findTeam(player.teamID);
  console.log("player: ");
  console.log(player);
  /* logs the following:
  {
    firstName: 'Stephen',
    lastName: 'Curry',
    playerId: 201939,
    teamId: 1610612744,
    fullName: 'Stephen Curry',
    downcaseName: 'stephen curry'
  }
  */
const playerTeam = getTeam(player.teamId);
function getTeam(teamId){
  return teams.find((team) => { return team.teamId == teamId});
}
console.log("team: ");
console.log(playerTeam)
console.log("info: ");
NBA.stats.playerInfo({ PlayerID: player.playerId }).then(console.log);
console.log('teste');

// const { pic, title } = HomeScreenPics[randomNo(1, HomeScreenPics.length)]
const {pic, title} = {
  pic: require('../../assets/women1.jpg'),
  title: player.fullName + "\n" + playerTeam.teamName,
  caption: '16 miles away',
};


const Social = ({ name }) => (
  <Icon
    name={name}
    type="font-awesome"
    containerStyle={styles.iconContainer}
    size={32}
  />
)
// <Image source={pic} style={styles.image} />
const table = {
    tableHead: ['PPG', 'RPG', 'APG', 'PIE'],
    tableData: [
      ['19.8 ', '7.1 ', '7.5 ', '13.2 '],
    ]
}
class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Avatar
            size={64}
            rounded
            source={pic} >
          </Avatar>

        <Text h4 style={styles.name}>
          {title}
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
  table_table: { width: 200, flex: 1, padding: 6, paddingTop: 30, backgroundColor: '#fff' },
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
