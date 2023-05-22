import React from 'react'

const Database = () => {
    const links = [
        { title: 'Convert case: upper to lower, lower to upper and more', url: 'https://convertcase.net/' },
        { title: 'SVG to Base64 converter', url: 'https://yoksel.github.io/url-encoder/' },
        { title: 'GSAP 3 Cheat Sheet', url: 'https://greensock.com/cheatsheet/' },
    ]

    return (
        <>
            <h1>Useful Links</h1>

            <ol className='fs-4'>
                {links.map(link => <li><a href="{link.url}" target="_blank" rel="noreferrer">{link.title}</a></li>)}
            </ol>
        </>
    )
}

export default Database
