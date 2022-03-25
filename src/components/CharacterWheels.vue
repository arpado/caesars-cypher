<template>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >

        <path id="characterwheel" fill="none"
            d="
            M 50,50
            m -40, 0
            a40,40 0 1,1 80,0
            a40,40 0 1,1 -80,0"
        />
        <text class="text" font-size="" id="movingwheel" ref="movingwheel">
            <textPath xlink:href="#characterwheel" method="stretch" textLength="248" font-size="10">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </textPath>
        </text>

        <path id="characterinnerwheel" fill="none"
            d="
            M 50,50
            m -30, 0
            a30,30 0 1,1 60,0
            a30,30 0 1,1 -60,0"
        />
        <text class="text"  font-size="" >
            <textPath xlink:href="#characterinnerwheel" method="stretch" textLength="187" font-size="10">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </textPath>
        </text>

    </svg> 
</template>

<script>

export default {

    props: [ 'index', 'increaseIndex' ],
    watch: {
        index(index) {
            //this.$refs.movingwheel.style.transition = 'transform 2s;'
            this.$refs.movingwheel.style.transform = `rotateZ(${index * (360/26)}deg)`

        }
    }
}
//letter-spacing="1.2"
//textLength="314" lengthAdjust="spacingAndGlyphs" letter-spacing="0" spacing="0"
</script>

<style>
    svg {
        transform-origin: center;
        transform: rotateZ(86deg);
        overflow: hidden;
    }
    #characterinnerwheel {
        transform-origin: center;
        transform: rotateZ(-1deg);
    }
    #movingwheel {
        transform-origin: center;
        backface-visibility: hidden;
        -webkit-font-smoothing: subpixel-antialiased;
        transition: transform .5s;
    }
</style>