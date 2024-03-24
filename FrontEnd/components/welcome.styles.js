import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
container: {
    width: SIZES.width,
    height: SIZES.height*0.5,
},
overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 40,
},
logobar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -20,
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
    fontSize: 32,
    color: '#fff',
    fontFamily: 'semibold',
    marginTop: 20,
    // textAlign   : 'center',
},

match:{
    marginTop: -10,
    fontSize: 27,
    fontFamily: 'bold',
    color: '#fff',
    textAlign   : 'center',

},
description:{
    fontFamily: 'regular',
    fontSize: 14,
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