let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*我是一名前端新人
*接下来我要展示一下会动的代码   
首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我要把div变成一个八卦图
*首先，先把div变成一个圆
*/
#div1{
    border-radius: 50%;
     box-shadow: 0 0 3px rgba(0,0,0,5);
     border: none;
}
/* 八卦是阴阳两极，一黑一白 */
#div1 {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}
/*加一个黑球*/
#div1::before {
  width: 100px;
  height: 100px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(0, 0, 0);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 100%
  );
}
/*再加一个白球*/
#div1::after {
  width: 100px;
  height: 100px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: rgb(255, 255, 255);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 25%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 100%,
    rgba(0, 0, 0, 1) 100%
  );
}
`;
let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";

        } else {
            string2 += string[n];

        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 10);
};
step();
