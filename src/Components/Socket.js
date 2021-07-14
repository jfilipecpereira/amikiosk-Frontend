// Import statements comes here.
import React, { useState, useRef, useEffect, useContext } from "react"
import { Redirect } from "react-router-dom"
import { HubConnectionBuilder } from "@microsoft/signalr"
import { ClientContext } from "../Contexts/ClientContext"

export const Socket = () => {
	const [connection, setConnection] = useState(null)
	const [chat, setChat] = useState([])
	const [lastState, setLastState] = useState(0)
	const latestChat = useRef(null)
	const [client] = useContext(ClientContext)

	latestChat.current = chat

	useEffect(() => {
		const newConnection = new HubConnectionBuilder()
			.withUrl("http://localhost:5000/hubs/chat")
			.withAutomaticReconnect()
			.build()

		setConnection(newConnection)
	}, [])

	useEffect(() => {
		if (connection) {
			connection
				.start()
				.then((result) => {
					console.log("Connected!")

					connection.on("ReceiveMessage", (message) => {
						const updatedChat = [...latestChat.current]
						updatedChat.push(message)
						console.log("----------messagem----------")
						console.log(message.user)
						console.log(client)
						console.log("-----------end------------")
						setChat(updatedChat)
						if(chat.length > 50){
							setChat(chat.slice(1))
						}
					})
				})
				.catch((e) => console.log("Connection failed: ", e))
		}
	}, [connection])

	if (chat[chat.length - 1]?.message == "0" && lastState === 1) {
		return <Redirect to='/' />
	} else if (chat[chat.length - 1]?.message === "1" && lastState === 0) {
		setLastState(1)
		return <></>
	} else {
		console.log("lastState")
		console.log(lastState)
		console.log("teste")
		console.log(chat[chat.length - 1]?.message)
		return <></>
	}
}

export default Socket
