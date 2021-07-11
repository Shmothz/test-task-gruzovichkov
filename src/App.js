import React, {useState, useEffect} from "react"
import Grid from "@material-ui/core"
import {createUseStyles} from 'react-jss';

export default function Page(props) {
  return <MyWonderfulComponent {...props}>
    I'm text from a component
  </MyWonderfulComponent>
}

function MyWonderfulComponent({id, options, children, other}) {

  const styles = createUseStyles({
    title: {
      color: 'red'
    }
  })()

  const [summ, setSumm] = useState(other);

  useEffect(() => {
    if (id && options.params.fields.isDynamic) {
      setSumm(summ + 1);
    }
  });

  return (
    <>
      <h1 className={styles.title}>Hello World!</h1>
      <Grid>
        <Grid xs={12}>{children}</Grid>
        <Grid>{summ}</Grid>
      </Grid>
    </>
  )
}
