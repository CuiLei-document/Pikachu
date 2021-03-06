const string =`

 .skin * {
     box-sizing: border-box;
   }
   .skin *::after,
   .skin *::before {
     box-sizing: border-box;
   }
    
   .skin {
     position: relative;
     background-color: #ffe600;
     min-height: 50vh;
   
   }
   .nose {
     position: relative;
     left: 50%;
     top: 150px;
     border: 20px solid #000000;
     border-color: #000000 transparent transparent transparent;
     width: 0px;
     height: 0px;
     margin-left: -20px;
     z-index: 10;
   }
   .nose:hover {
     transform-origin: 50% 100%;
     animation: words 100ms infinite;
   }
   @keyframes words {
     0% {
       transform: rotate(0);
     }
     20% {
       transform: rotate(4deg);
     }
     40% {
       transform: rotate(-4deg);
     }
     100% {
       transform: rotate(0);
     }
   }
   .yuan {
     /* border: 1px solid red; */
     border-radius: 15px 15px 0px 0px;
     background-color: #000000;
     width: 38px;
     height: 15px;
     position: absolute;
     top: -32px;
     left: -19px;
   }
   .eve {
     position: absolute;
     top: 100px;
     left: 50%;
     border: 3px solid #2e2e2e;
     width: 64px;
     height: 64px;
     margin-left: -32px;
     border-radius: 50%;
     background: #000000;
   }
   .eve::before {
     position: relative;
     top: 2px;
     left: 8px;
     content: "";
     display: block;
     border: 3px solid #fff;
     width: 32px;
     height: 32px;
     border-radius: 50%;
     background-color: #ffffff;
   }
   .eve.left {
     transform: translateX(-100px);
   }
   .eve.right {
     transform: translateX(100px);
   }
   .mouth {
     position: absolute;
     top: 200px;
     left: 50%;
     /* border: 1px solid red; */
     width: 150px;
     height: 170px;
     margin-left: -75px;
   }
   .mouth .goatee {
     position: relative;
     z-index: 1;
   }
   .mouth .goatee .goateeLeft {
     position: absolute;
     top: -25px;
     left: -5px;
     border: 5px solid #000000;
     width: 80px;
     height: 30px;
     border-radius: 0 0 0 50px;
     border-top: none;
     border-right: none;
     transform: rotate(-15deg);
     background: #ffe600;
   }
   .mouth .goatee .goateeRight {
     position: absolute;
     top: -25px;
     left: 75px;
     border: 5px solid #000000;
     width: 80px;
     height: 30px;
     border-radius: 0 0 50px 0px;
     border-top: none;
     border-left: none;
     transform: rotate(15deg);
     background: #ffe600;
   }
   .mouth .tongue {
     position: relative;
     top: -10px;
     width: 150px;
     height: 200px;
     overflow: hidden;
   }
   .mouth .tongue .yuan1 {
     border: 3px solid #000;
     width: 120px;
     height: 250px;
     position: absolute;
     bottom: 0;
     left: 50%;
     background-color: #9b000a;
     margin-left: -60px;
     border-radius: 150px/300px;
     overflow: hidden;
   }
   .mouth .tongue .yuan2 {
     /* border: 3px solid green; */
     width: 180px;
     height: 250px;
     position: absolute;
     bottom: -85px;
     left: 50%;
     background-color: #ff485f;
     margin-left: -90px;
     border-radius: 50%;
   }
   .face {
     z-index: 2;
     border: 1px solid red;
     width: 80px;
     height: 80px;
     position: absolute;
     top: 230px;
     left: 50%;
     margin-left: -40px;
   }
   .face.left {
     transform: translate(-160px);
     border-radius: 50%;
     border: 3px solid #000;
     background-color: #ff0000;
   }
   .face.right {
     transform: translate(160px);
     border-radius: 50%;
     border: 3px solid #000;
     background-color: #ff0000;
   }
 
`
// ????????????
export default string