import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => Response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImgs: memes})
        })
    }

    render() {
        return (
            <h1>Code here</h1>
        )
    }

}


export default MemeGenerator