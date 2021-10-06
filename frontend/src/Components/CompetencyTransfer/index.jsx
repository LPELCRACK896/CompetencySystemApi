import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './competencyTransfer.module.css';
import Container from '../Container';
//import ComboBox from '../ComboBox';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const CompetencyTransfer = (props) => {

    const [selectedAccount, setSelectedAccount] = useState("")
    const [description, setDescription] = useState("")
    const [state, setState] = React.useState(true);
  
    const handleChange = () => {
      setState(!state);
    };

    const useStyles = makeStyles((theme) => ({
      margin: {
        margin: theme.spacing(1),
      }
    }));

    const config = [
      {
        type:"transferBlock", 
        state: description,
        method: setDescription,
        options: props.accounts
      },
      {
        type:"selectListElement", 
      },
      
    ]

    const classes = useStyles();
    
    return (
      <div className={styles.wrapper}>
          <p className={styles.title}>Conceder y editar competencias</p>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Conceder</Grid>
              <Grid item>
                <Switch
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item>Editar</Grid>
            </Grid>
          </Typography>
          <div style={{display:'flex', justifyContent: 'space-between'}}>
            <Button 
              className={classes.margin}
              size="medium" 
              variant="outlined" 
              color="secondary">
              {state ? "Transferir" : "Editar"}
            </Button>
          </div>
          <div style={{display:'flex'}}>    
            {config.map((value, index) => (
              <Container
                key = {index}
                type = {value.type}
                placeHolder = {value.placeHolder}
                title = {value.title}
                options = {value.options}
                value = {value.state}
                updateMethod = {value.method}
                rows = {value.rows}
              />
            ))}     
          </div>
        </div>
    );
}

export default CompetencyTransfer;