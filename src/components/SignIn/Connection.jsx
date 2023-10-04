import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Connection(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSumit(event){
        event.prevenDefault()
        console.log(email, password);
    }
    return (
			<div className="connection">
				<h2 className="connection__title">Connection</h2>
				<form className="connection__form" onSubmit={handleSumit}>
					<label>
						<input
							className="connection__form__input"
							type="email"
							value={email}
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
					<label>
						<input
							className="connection__form__input"
							type="password"
							value={password}
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</form>
			</div>
		);
}