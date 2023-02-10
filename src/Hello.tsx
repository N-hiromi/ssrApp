import React from "react";
import "./css/hello.css";
// const Hello = () => <h1>こんにちは！</h1>;
const Hello = () => {
	const name: string = "やっちゃんさん";
	const character: string = "繊細";
	const food: string = "蕎麦やえんどう豆など。ペレットも好き";
	const detail: string = "飛ぶのは下手です。"
  return(
		<div className="main">
			<h1>自己紹介</h1>
			<div className="yattyan">
				<img className="icon" src="./images/yattyan.jpg"/>
				<p>名前：{ name }</p>
				<p>性格：{ character }</p>
				<p>好きな食べ物：{ food }</p>
				<p>その他：{ detail }</p>
			</div>
		</div>
	)
}
export default Hello;