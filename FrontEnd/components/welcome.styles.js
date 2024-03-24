import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
container: {
    width: SIZES.width,
    height: SIZES.height*0.9,
},
overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    padding: 20,
},
logobar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
},
logo:{
    fontSize: 20,
    color: "#fff",
    fontFamily: 'bold',
},
menucontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
    },
    menuItems: {
    flexDirection: "row",
},
menuCont:{
    padding: 10,
},
    text: {
    fontSize: 16, 
    fontFamily: "semibold",
    color: "#fff",
    borderBottomWidth: 1,
},
best:{
    fontSize: 44,
    color: '#fff',
    fontFamily: 'semibold',
    marginTop: 20,
    textAlign   : 'center',
},

match:{
    marginTop: -10,
    fontSize: 27,
    fontFamily: 'bold',
    color: '#fff',
    textAlign   : 'center',

},
description:{
    // width: SIZES.width * 0.6,
    fontFamily: 'regular',
    textAlign   : 'center',
    color: '#fff',
},

welcomeCont:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: "50%",
}, 
welcome:{
    width: "100%",
}
})
export default styles;