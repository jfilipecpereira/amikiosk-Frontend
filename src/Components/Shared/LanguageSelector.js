import React from "react"
import PropTypes from "prop-types"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
//import DialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogTitle from "@material-ui/core/DialogTitle"
import Dialog from "@material-ui/core/Dialog"
import Typography from "@material-ui/core/Typography"

//import '../../css/Flag.css'
import portugues from "../../images/portugues.png"
import ingles from "../../images/english.jpg"
import frances from "../../images/frances.png"
import espanhol from "../../images/espanhol.png"

import { useTranslation } from "react-i18next"
import { withStyles } from "@material-ui/core/styles"

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
})

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, ...other } = props
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6' style={{ fontSize: "35px" }}>
				{children}
			</Typography>
		</MuiDialogTitle>
	)
})

const idiomas = [
	{
		name: "Português",
		sigla: "ptPT",
		image: portugues,
	},
	{
		name: "Inglês",
		sigla: "enGB",
		image: ingles,
	},
	{
		name: "Espanhol",
		sigla: "esES",
		image: espanhol,
	},
	{
		name: "Francês",
		sigla: "frFR",
		image: frances,
	},
]

function SimpleDialog(props) {
	const { onClose, selectedValue, open } = props

	const handleClose = () => {
		onClose(selectedValue)
	}

	const { t, i18n } = useTranslation()

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng)
		onClose()
	}

	return (
		<>
			<Dialog
				onClose={handleClose}
				aria-labelledby='simple-dialog-title'
				open={open}
				maxWidth='sm'
				fullWidth={true}
			>
				<DialogTitle id='ls-dialog-title'>{t("RES_Language")}</DialogTitle>
				<List>
					{idiomas.map((idioma, index) => (
						<ListItem button onClick={() => changeLanguage(idioma.sigla)} key={index}>
							<ListItemText
								primary={idioma.name}
								style={{
									textAlign: "center",
									paddingTop: "20px",
									paddingBottom: "20px",
									fontSize: "35px",
								}}
							/>
						</ListItem>
					))}
					<ListItem button onClick={() => handleClose()}>
						<ListItemText
							primary={t("RES_Cancel")}
							style={{
								textAlign: "center",
								paddingTop: "20px",
								paddingBottom: "20px",
							}}
						/>
					</ListItem>
				</List>
			</Dialog>
		</>
	)
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	selectedValue: PropTypes.string.isRequired,
}

export default function LanguageSelector() {
	const { i18n } = useTranslation()
	const [open, setOpen] = React.useState(false)
	const [selectedValue, setSelectedValue] = React.useState(idiomas[0].sigla)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = (value) => {
		setOpen(false)
		setSelectedValue(value)
	}

	const Image = () => {
		let image = null
		idiomas.map((idioma) => {
			console.log(i18n.language)
			if (idioma.sigla == i18n.language) {
				image = idioma.image
			}
		})

		return <img src={image} onClick={handleClickOpen} className='flagImage' width='100' height='60' />
	}

	return (
		<>
			<div className='flag'>
				<Image />
				<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} maxWidth='lg' />
			</div>
		</>
	)
}
