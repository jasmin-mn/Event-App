import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styles from "./multiStep.module.css";
export default function Category8(props) {



const[category,setCategory]=useState([]);
useEffect(()=>{
  getCategory()

},[])
  
const getCategory = async () => {


  
  // try {
  //   const result = await fetch("http://localhost:7000/category/view", {
  //     method: "GET",
  //     credentials: "include",
  //     headers: { "Content-Type": "application/json" },
  //   });
    
  //   console.log(345435, result);
  // } catch (error) {
  //   alert(error);
  // }

  try {
    const result=await axios.get("http://localhost:7000/category/view");
    if(!result){
      console.log('server error');
    }
    console.log(result.data);
    setCategory(result.data)

  } catch (error) {
    
  }

};


    // return (
    //   <div className={styles.background}>
    //     <p className={styles.text}>
    //       Categories:
    //       <div >
    //         <select>
    //           <option  value="0">HTML</option>
    //           <option >CSS</option>
    //           <option >React</option>
    //           <option >Node js</option>
    //         </select>
    //       </div>
    //     </p>


return (
  <div className={styles.background}>
    <select>
      <option  className={styles.text} >
        please Select category
      </option>

      {category &&
        category.map((category) => {
          return (
            <option
              name="category"
              key={category._id}
              value={category._id}
              onChange={props.handleChange}
            >
             
              {category.name}
            </option>
          );
        })}
    </select>

    <div className={styles.button}>
      <button onClick={props.prev}>Previous</button>
      {props.hasNext() && <button onClick={props.next}>Next</button>}
    </div>
  </div>
);
     
}
