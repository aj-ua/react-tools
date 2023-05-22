import React, { useState } from 'react'

const Database = () => {
    const intialValues = {
        oldUrl: "https://old.com",
        newUrl: "http://localhost/test",
        prefix: "wp_",
    }

    const [formValues, setFormValues] = useState(intialValues)

    let query = `UPDATE ${formValues.prefix}options SET option_value = replace(option_value, '${formValues.oldUrl}', '${formValues.newUrl}') WHERE option_name = 'home' OR option_name = 'siteurl';
    UPDATE ${formValues.prefix}posts SET guid = replace(guid, '${formValues.oldUrl}', '${formValues.newUrl}');
    UPDATE ${formValues.prefix}posts SET post_content = replace(post_content, '${formValues.oldUrl}', '${formValues.newUrl}');
    UPDATE ${formValues.prefix}postmeta SET meta_value = replace(meta_value, '${formValues.oldUrl}', '${formValues.newUrl}');`

    //input change handler
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const copyText = () => {
        // Get the text field
        const copyText = document.getElementById("copyText");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        alert("Copied the text: " + copyText.value);
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h1 className='mb-5'>Replace Database Url</h1>

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

                        <div className="mb-3">
                            <label className="form-label fw-semibold">SQL query:</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="copyText"
                                readOnly
                                rows="10"
                                name="query"
                                value={query}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={copyText}>Copy text</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Database
