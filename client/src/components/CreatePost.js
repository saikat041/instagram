import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    container: {
        width: 600,
        textAlign: 'center',
        background: 'white',
        margin: 'auto',
        marginTop: 100,
        borderRadius: 5,
    },
    preview: {
        width: 600,
        minHeight: 200,
        position: 'relative',
    },
    img: {
        width: '100%',
        height: 'auto'
    },
    remove: {
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 10,
        background: 'white',
        borderRadius: 30,
        color: 'grey'
    },
    caption: {
        marginTop:-5
    }
});

export default function NewPost(props) {

    const classes = useStyles()
    const [file, setFile] = useState('')
    const [imageInputValue, setImageInputValue] = useState('')
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null)
    const [cpation, setCaption] = useState('')

    function _handleImageChange(e) {
        let reader = new FileReader()
        let file = e.target.files[0];

        setImageInputValue(e.target.value)

        reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result)
        }
        reader.readAsDataURL(file)
    }

    function _handleCaptionChange(e){
        e.preventDefault()
        setCaption(e.target.value)
    }

    function _handleRemove(e) {
        setImagePreviewUrl('')
        setImageInputValue('')
    }

    return (
        <div className={classes.container}>

            <div className={classes.preview}>
                {
                    imagePreviewUrl ? <CloseIcon className={classes.remove} onClick={_handleRemove} /> : null
                }
                {
                    imagePreviewUrl ?
                        <img src={imagePreviewUrl} className={classes.img} /> :
                        <input type="file" value={setImageInputValue} onChange={_handleImageChange} style={{marginTop:50}}/>
                }
            </div>

            <TextField
                className={classes.caption}
                variant='outlined'
                fullWidth
                multiline
                rows={2}
                placeholder='Write a caption ...'
                onChange={_handleCaptionChange}
            />

            <Button variant='contained' color='primary' style={{margin:'10px 0px'}}> Post </Button>

        </div>)
}