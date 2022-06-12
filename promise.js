const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async(emosi) => {
  try{
    const listFilm = await (await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])).flat()
    const emosiCounter = listFilm.filter(item => item.hasil === emosi);
    return emosiCounter.length;
  }
  catch(rejectMessage){
    console.log(`Error in: ${rejectMessage}`);
  }
};

module.exports = {
  promiseOutput,
};
