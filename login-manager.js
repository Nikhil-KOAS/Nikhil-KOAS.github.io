
async function sendData() {
    const form = document.getElementById("sign_up")
    const formData = new FormData(form);
    console.log(formData)
    username=formData.get("username")
    email=formData.get("email")
    password=formData.get("password")
    realname=formData.get("realname")
    teacher=formData.get("teacher")
    schoolyear=Number(formData.get("year"))
    today = new Date()
    date=new Date(today.getFullYear()-(schoolyear+4), 1, 1, ) //Calculates the 1st of January of the year in which the student was born, eg for 2026-7 year 10 - 1/1/12
    data={
        "username": username,
        "name": realname,
        "password": password,
        "email": email,
        "school_year": date,
        "teacher": teacher,
        // Where the info for difficult words, etc is stored (basically all the data we are storing about the user) (below)
        "knowledge": {
            "history": [], //All of the user's past test
            /* [
                [({
                    word: "servus"
                    correct: true
                }, etc]
            ] */
            "accuracy": [], //The average score on each word (Should let us tell the user what they are struggling on)
            "xp": 0 //Displayed on leaderboards
        } 
}
  
}
