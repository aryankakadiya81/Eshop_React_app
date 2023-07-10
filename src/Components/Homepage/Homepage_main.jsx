import React from 'react'
import Section_1 from './Section_1/Section_1'
import Section_1p5 from './Section_1.5/Section_1.5'
import Section1p5 from './Section_1.5/Section_1.5'
import Section_2 from './Section_2/Section_2'
import Section_3 from './Section_3/Section_3'
import Section_4 from './Section_4/Section_4'
import Section_5 from './Section_5/Section_5'

const Homepage_main = () => {
    return (
        <>
            <div className='select-none'>
                <Section_1></Section_1>
                <Section1p5></Section1p5>
                <Section_2></Section_2>
                <Section_3></Section_3>
                <Section_4></Section_4>
                <Section_5></Section_5>
            </div>
        </>
    )
}

export default Homepage_main

