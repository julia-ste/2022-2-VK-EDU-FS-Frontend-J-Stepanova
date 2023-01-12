import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const mapStateToProps = state => ({
    token: state.auth.token,
})

const RequireAuth = ({ token }) => {
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default connect(mapStateToProps, null)(RequireAuth)