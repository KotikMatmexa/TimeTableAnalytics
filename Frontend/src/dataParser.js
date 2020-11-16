import jsonData1 from './TestData/audience_1'
import jsonData2 from './TestData/audiences_2'
import jsonData3 from './TestData/audience_big_data'

const data1 = jsonData1.results;
const data2 = jsonData2.results;
const data3 = jsonData3.results;

//получить список всех адресов спбгу
export const addressesList = () =>{
  let addresses = [];
  for (let value of data1){
    addresses.push(value.address.russian_name)
  }
    for (let value of data2){
        addresses.push(value.address.russian_name)
    }
    for (let value of data3){
        addresses.push(value.address.russian_name)
    }
    return addresses;
};

//адрес + количество мест + список кабинетов
export const getData = (addresses) => {

  const resultSet = [];
   for (let address of addresses){
     let v1 = data1.find(item => item.address.russian_name === address);
       if (v1) {
         resultSet.push(v1);
           continue;
       }
     let v2 = data2.find(item => item.address.russian_name === address);
       if (v2) {
         resultSet.push(v2);
           continue;
       }
       let v3 = data3.find(item => item.address.russian_name === address);
       resultSet.push(v3);

   }
   console.log(resultSet);
   return resultSet;
};