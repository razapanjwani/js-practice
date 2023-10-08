const newMap = new Map()
function setUserPreference(userId,preferenceKey,preferenceValue) {
    if(!(newMap.has(userId))){
        newMap.set(userId,new Map())
    }
    newMap.get(userId).set(preferenceKey,preferenceValue)
    console.log(newMap.get(userId).get(preferenceKey));
    console.log(newMap);
}

setUserPreference("user1","theme","light")


function getUserPreference(userId,preferenceKey) {
    if(newMap.has(userId)){
        let userPref = newMap.get(userId)
    
    if(userPref.has(preferenceKey)){
       return userPref.get(preferenceKey)
    }}
    
}
let pref = getUserPreference("user1","theme");
console.log(pref);
console.log(newMap);


// sets
let newSet = new Set()
newSet.add("raza")
newSet.add(function (){})
console.log(newSet);


class Students{
    constructor(){
        this.presentStd = new Set()
    }
    markPresent(student){
        this.presentStd.add(student)
    }
    markAbsent(student){
        this.presentStd.delete(student)
    }
    getAbsentStd(){
        const allStd = ["chris","ali","raza","panjwani","jane"]
        const absentStd = new Set(allStd)
        for(const student of this.presentStd){
            absentStd.delete(student)
        }
        return absentStd
    }

}
const attendance = new Students()

attendance.markPresent("chris")
attendance.markPresent("raza")
console.log(attendance.getAbsentStd());