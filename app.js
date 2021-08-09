const DateFormator = async (data) => {
  try {
    let newDate = null;
    console.log("inside date formator");
    if (data === undefined) {
      newDate = new Date();
    } else {
      newDate = data;
    }
    let month = newDate.getMonth() + 1;
    // console.log(typeof month, "dsfe");
    let day = newDate.getDay() + 1;
    let year = newDate.getFullYear();
    if (month <= 9) {
      console.log("inside if condition");
      month = "0" + month;
    }
    if (day <= 9) {
      day = "0" + day;
    }
    let dat = month + "/" + day + "/" + year;
    return dat;
  } catch (error) {
    console.log(error.message);
    return {};
  }
};

module.exports = { DateFormator };
