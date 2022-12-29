import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getLanguages } from 'actions/languages'
import TextBox from 'components/TextBox'


const mapStateToProps = state => ({
    languages: state.languages.languages,
})

const PageTranslation = ({ languages, getLanguages }) => {
    useEffect(() => {
        getLanguages()
    })

    const handleSubmit = text => {}

    return (
        <div>
            <TextBox languages={languages} onSubmit={handleSubmit} />
            <TextBox languages={languages} disabled />
        </div>
    )
}

export default connect(mapStateToProps, { getLanguages })(PageTranslation)