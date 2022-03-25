<template>
    <div class="main-div">

        <input type="text" class="textinput" placeholder="Enter Text to Cypher" v-model="text" @keyup="encode(text, index)">

        <div class="textcontainer">
            <p>{{ encoded }}</p>
        </div>
       
        <div class="btn-container">
            <button @click="this.$emit('decreaseIndex')">Rotate Left</button>
            <div id="indexcontainer">
                <p>{{ index }}</p>
            </div>
            <button @click="this.$emit('increaseIndex')">Rotate Right</button>
        </div>

    </div>    
</template>

<script>
//import encodingMethod.js es abba kiszervezni a logikat
//import encodingMethod from './encodingMethod.js'
//props: { encodingMethod },
//components: { encodingMethod },

export default {
    props: [ 'index' ],
    emits: ['increaseIndex', 'decreaseIndex', 'encode', 'index'],
    data() {
        return {
            text: '',
            encoded: ''
        }
    },
    methods: {
        encode(text, i) {
            
            let newArr = this.text.split('').map(letter => {//encodingMethod(letter, index)
            
                //forgatas 0-25
                //A-Z 65-90
                //a-z 97-122
                let newChar = '';
                let letterValue = letter.charCodeAt();
                if(letterValue > 64 && letterValue < 91) {
                    if ((letterValue + i) > 90) {
                        let res = i - (91 - letterValue);
                        newChar = String.fromCharCode(res + 65);
                    } else {
                        newChar = String.fromCharCode(i + letterValue);
                    }
                } else if (letterValue > 96 && letterValue < 123) {
                    if ((letterValue + i) > 122) {
                        let res = i - (123 - letterValue);
                        newChar = String.fromCharCode(res + 97);
                    } else {
                        newChar = String.fromCharCode(i + letterValue);
                    }
                } else {
                    newChar = letter;
                }
                return newChar;
            });
        this.encoded = newArr.join('');

        // let newArr = this.text.split('');
        // let newArr2 = newArr.map(letter => {encodingMethod(letter, this.index)});
        // console.log(newArr2)
        // this.encoded = newArr2.join('');
        
        } 
    },
    watch: {
        index(index, oldval, text) {
            this.encode(text, index)
        }
    }
}
</script>

<style>
    .main-div {
        /*border: 1px solid black;*/
        max-width: 400px;
        max-height: 400px;
        height: 40vw;
        width: 40vw;
        min-height: 250px;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-size: 2rem;
    }
    .textinput {
        display: block;
        margin: 10px;
        width: 100%;
        height: 50px;
        text-align: center;
        font-size: 2rem;
    }
    .textcontainer {
        width: 100%;
        height: 50px;
        background-color: white;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-container {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    button {
        height: 50px;
        width: 100px;
    }
    #indexcontainer {
        width: 50px;
        height: 50px;
        background-color: white;
        border: 1px solid black;
         display: flex;
        justify-content: center;
        align-items: center;
    } 
</style>