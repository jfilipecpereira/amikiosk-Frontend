// Import statements comes here.
import React, { useState } from "react"
import "../../Styles/RestScreen.css"
import "../../Styles/Client.css"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"

import { Redirect } from "react-router-dom"
import VATData from "./VATData"
import MB from "./MB"
import Final from "./Final"

export const Stepper = () => {
	const { t } = useTranslation()
	const [step, setStep] = useState(1)
	const [goBack, setGoBack] = useState(false)

	const nextStep = () => {
		setStep(step + 1)
	}

	const prevStep = () => {
		setStep(step - 1)
	}

	const arrowActions = () => (
		<>
			<div className='prevStep' onClick={step > 1 ? prevStep : () => setGoBack(true)}>
				<FontAwesomeIcon size='8x' icon={faAngleLeft} />
				<span className='goBackText'>{step > 1 ? <>{t("RES_Previous")}</> : <>Voltar</>}</span>
			</div>
			<div className='nextStep' onClick={nextStep}>
				<span className='goBackText'>{t("RES_Next")}</span>
				<FontAwesomeIcon size='8x' icon={faAngleRight} />
			</div>
		</>
	)

	if (goBack) return <Redirect to='/main' />

	switch (step) {
		case 1:
			return (
				<>
					<VATData mainText={t("RES_Billing")} />
					{arrowActions()}
				</>
			)
		case 2:
			return (
				<>
					<MB mainText={t("RES_ATM")} />
					{arrowActions()}
				</>
			)
		case 3:
			return (
				<>
					<Final mainText='Final' />
					{arrowActions()}
				</>
			)
		case 4:
			return (
				<>
					Teste4
					{arrowActions()}
				</>
			)
		case 5:
			return (
				<>
					Teste5
					{arrowActions()}
				</>
			)
		case 6:
			return (
				<>
					Teste6
					{arrowActions()}
				</>
			)
		case 7:
			return (
				<>
					Teste7
					{arrowActions()}
				</>
			)
		case 8:
			return (
				<>
					Teste8
					{arrowActions()}
				</>
			)

		default:
			return <Redirect to='/client' />
	}
}

export default Stepper
