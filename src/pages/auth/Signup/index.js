import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Selector from 'components/Select/Select'
import Input from 'components/Input'
import Button from 'components/Button'
import ErrorBox from 'components/ErrorBox'
import ConfirmEmail from 'pageComponents/ConfirmEmail'
import validate, { tests } from 'utils/validate'
import { useDispatch } from 'react-redux'
import { actions } from 'slices/app.slice'
import { path } from 'utils/const'
import styles from './signup.module.scss'

const customTests = {
  ...tests,
  name: {
    test: tests.name.test,
    error: 'Please input full name',
  },
}

const Signup = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  // ------------------------------------
  // State
  // ------------------------------------
  const [input, setInput] = useState({
    name: '',
    email: '',
    office: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState({})
  const [resErr, setResError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isOpen, setOpen] = useState(false)

  // ------------------------------------
  // Handlers
  // ------------------------------------
  const handleOnChange = ({ target: { name, value } }) => {
    setInput((prev) => ({ ...prev, [name]: value }))
    setError((prev) => ({ ...prev, [name]: '' }))
    setResError('')
  }

  const handleSubmit = async () => {
    // validation
    const result = validate(input, customTests)
    setError(result.errors)
    if (result.isError) return

    // confirm password
    if (input.password !== input.confirmPassword) {
      setError({
        password: 'Password do not match',
        confirmPassword: 'Password do not match',
      })
      return
    }

    // signup action
    setLoading(true)

    // set office to name
    input.office = input.office.value

    try {
      await dispatch(actions.signup(input))
      setOpen(true)
      setLoading(false)
      setResError('')
    } catch (err) {
      setResError(err.message)
      setLoading(false)
    }
  }

  return (
    <div className={styles.root}>
      {resErr && <ErrorBox>{resErr}</ErrorBox>}
      <h2 className={styles.title}>Signup</h2>
      <Input
        label="Full Name"
        name="name"
        placeholder="John Doe"
        value={input.name}
        onChange={handleOnChange}
        error={error.name}
      />
      <Selector
        label="Office Location"
        name="office"
        placeholder="select main office"
        options={[
          {
            value: 'Yaletown, Vancouver, Canada',
            label: 'Yaletown, Vancouver, Canada',
          },
          { value: 'Britz, Berlin, Germany', label: 'Britz, Berlin, Germany' },
          {
            value: 'Sendai District, Tokyo, Japan',
            label: 'Sendai District, Tokyo, Japan',
          },
        ]}
        value={input.office}
        onChange={handleOnChange}
        error={error.office}
      />
      <Input
        label="Email"
        name="email"
        placeholder="email@example.com"
        value={input.email}
        onChange={handleOnChange}
        error={error.email}
      />
      <Input
        type="password"
        label="Password"
        name="password"
        placeholder="make it good"
        value={input.password}
        onChange={handleOnChange}
        error={error.password}
      />
      <Input
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        placeholder="password1234"
        value={input.confirmPassword}
        onChange={handleOnChange}
        error={error.confirmPassword}
      />
      <br />
      <Button
        label="Signup"
        className={`btn-black-fill ${styles.submitButton}`}
        onClick={handleSubmit}
        isLoading={isLoading}
      />
      <div className={styles.footerContainer}>
        <div className={styles.textContainer}>
          You have account?{' '}
          <Button
            label="Log in"
            className={styles.linkButton}
            onClick={() => history.push(path.login)}
          />
        </div>
        <div className={styles.textContainer}>
          Forget{' '}
          <Button
            label="Password"
            className={styles.linkButton}
            onClick={() => history.push(path.resetPassword)}
          />
          ?
        </div>
      </div>
      <ConfirmEmail
        email={input.email}
        isOpen={isOpen}
        toggle={() => setOpen((prev) => !prev)}
        onSubmit={() => {
          setOpen((prev) => !prev)
          history.push(path.login)
        }}
      />
    </div>
  )
}

Signup.propTypes = {}
Signup.defaultProps = {}

export default Signup
