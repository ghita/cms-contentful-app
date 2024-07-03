import React from 'react'
import Link from 'next/link'

export default function About() {
return (
    <div>
        <h2>
            My name is <i>Gheorghe Marinca</i>. I am a Software developer from Romania. I have a passion for software development and I am always looking for new challenges.
        </h2>
        <br/>
        <p>
            Connect with me on <Link className='underline' href="https://www.linkedin.com/in/gheorghe-marinca/">LinkedIn</Link>.
        </p>
        <p>
            My git repository is <Link className='underline' href="https://github.com/ghita">here</Link>.
        </p>
    </div>
)
}