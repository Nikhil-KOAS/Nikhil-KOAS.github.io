confirm("Function  run!")

import { createClient } from '@supabase/supabase-js'
// creates the client to send data to the server i think 
const supabase = createClient('https://kryurizvvrnssyrmcvsw.supabase.co/rest/v1/', 'sb_publishable_rjU9eKvVV_kjLttMBa4hog_7k-WTxvp')
/* const { data } = await supabase.from('profiles').select('*')
console.log(data) */

const form = document.querySelector("#sign-up");
async function sendData() {
    const formData = new FormData(form);
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
  try { // checks for errors
    const { error } = await supabase
  .from('Accounts')
  .insert(data)
  } catch (e) { // runs if errors
    console.error(e);
  }
}

// Runs function if submit pressed

form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});