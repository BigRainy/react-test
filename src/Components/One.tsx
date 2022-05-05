import { connect } from 'react-redux'
import React from 'react'
import { Dispatch } from 'redux'	// redux提供了Dispatch作为dispatch的类型检测接口

interface IProps {
  num: number;
  increaseFn: () => void
}

const One: React.FC<IProps> = (props) => {
  return (
    <div>
      <h3>{props.num}</h3>
      <button onClick={() => props.increaseFn()}>累加</button>
    </div>
  )
}

const mapStateToProps = (state: { num: number }) => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increaseFn() {
      dispatch({ type: "increase", value: 2 })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(One)
