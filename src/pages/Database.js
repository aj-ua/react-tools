import React, { useState } from 'react'

const Database = () => {
    const intialValues = {
        oldUrl: "https://old.com",
        newUrl: "http://localhost/test",
        prefix: "wp_",
    }

    const [formValues, setFormValues] = useState(intialValues)
    const [isCopied, setIsCopied] = useState(false);

    let query = `UPDATE ${formValues.prefix}options SET option_value = replace(option_value, '${formValues.oldUrl}', '${formValues.newUrl}') WHERE option_name = 'home' OR option_name = 'siteurl';
UPDATE ${formValues.prefix}posts SET guid = replace(guid, '${formValues.oldUrl}', '${formValues.newUrl}');
UPDATE ${formValues.prefix}posts SET post_content = replace(post_content, '${formValues.oldUrl}', '${formValues.newUrl}');
UPDATE ${formValues.prefix}postmeta SET meta_value = replace(meta_value, '${formValues.oldUrl}', '${formValues.newUrl}');`

    //input change handler
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(query)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 3000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h1>Replace Database Url</h1>

                    <form className='text-start'>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Old Url:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="oldUrl"
                                        value={formValues.oldUrl}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">New Url:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="newUrl"
                                        value={formValues.newUrl}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Database prefix:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="prefix"
                                value={formValues.prefix}
                                onChange={handleChange}
                            />
                        </div>

                        {/* <input type="text" className="copyText" readOnly value={query} /> */}

                        <div className="mb-3">
                            <label className="form-label fw-semibold">SQL query:</label>
                            <textarea
                                type="text"
                                className="form-control"
                                readOnly
                                rows="10"
                                name="query"
                                id="copy"
                                value={query}
                                style={{ backgroundColor: '#d4edda' }}
                            />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleCopyClick}>{isCopied ? 'Text was copied!' : 'Copy text'}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Database
