import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme) =>
  createStyles({
    addButton: {
      color: '#ffffff',
      backgroundColor: '#388e3c',
      textTransform: 'initial'
    },
    addButtonIcon: {
        color: '#ffffff',
        marginRight: theme.spacing(1)
    },
    moreButton: {
        textTransform: 'initial'
    },
    moreButtonIcon: {
        marginRight: theme.spacing(1),
        textTransform: 'initial'
    }
  }),
);

const Segments = () => {
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return (
        <Box display="flex" flexGrow={1} flexDirection="column">
            <Box flexGrow={1}>

            </Box>
            <Box display="flex" margin={2} flexDirection="column" flexGrow={1}>
                <Box display="flex" flexDirection="row">
                    <Box flexDirection="column" width="25%" marginRight={1} padding={2} border="solid 1px gray" bgcolor="white" display="flex" borderRadius={6}>
                        <Typography variant="h6">Define a new Segment</Typography>
                        <Typography display="block" variant="caption">
                            Add a Condition to define a segment. The more conditions you add the more specific your segment will be.
                        </Typography>
                    </Box>
                    <Box flexGrow={1} border="solid 1px gray" padding={2} bgcolor="white" display="flex" borderRadius={6}>
                        <Typography variant="h6">Estimated segment size</Typography>
                    </Box>
                </Box>
                <Box display="flex" border="solid 1px gray" marginTop={1} bgcolor="white" borderRadius={6} flexDirection="column">
                    <Box display="flex" padding={2} borderBottom="solid 1px gray" flexDirection="column">
                        <Box display="flex" flexDirection="row">
                            <Box flexGrow={1} display="flex" flexDirection="row">
                                <Typography variant="h6">Products Purchased&nbsp;</Typography>
                                <Typography variant="h6" color="textSecondary">- What products have they interacted with?</Typography>
                            </Box>
                            <Box display="flex">
                                <Button size="small" variant="outlined" className={classes.moreButton}>
                                    <FontAwesomeIcon className={classes.moreButtonIcon} size="xs" icon="trash-alt"/>
                                    Delete
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" padding={2} flexDirection="column">
                        <Box display="flex" flexDirection="row">
                            <Box flexGrow={1} display="flex" flexDirection="row">
                                <Typography variant="h6">Time of Purchase&nbsp;</Typography>
                                <Typography variant="h6" color="textSecondary">- When did this purchase take place?</Typography>
                            </Box>
                            <Box display="flex">
                                <Button size="small" variant="outlined" className={classes.moreButton}>
                                    <FontAwesomeIcon className={classes.moreButtonIcon} size="xs" icon="clock"/>
                                    Remove time period
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" border="solid 1px gray" padding={2} marginTop={1} bgcolor="white" borderRadius={6} flexDirection="column">
                    <Box display="flex" flexDirection="row">
                        <Box flexGrow={1} display="flex" flexDirection="row">
                            <Typography variant="h6">Technology&nbsp;</Typography>
                            <Typography variant="h6" color="textSecondary">- Which device or operating system are they using?</Typography>
                        </Box>
                        <Box display="flex">
                            <Button size="small" variant="outlined" className={classes.moreButton}>
                                <FontAwesomeIcon className={classes.moreButtonIcon} size="xs" icon="trash-alt"/>
                                Delete
                            </Button>
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Button size="small" variant="outlined" className={classes.moreButton}>
                            <FontAwesomeIcon className={classes.moreButtonIcon} size="xs" icon="plus"/>
                            More
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" padding={2} border="solid 1px gray" marginTop={1} bgcolor="white" borderRadius={6} flexDirection="column">
                    <Box flexGrow={1} display="flex" flexDirection="row">
                        <Box width="25%">
                            <Typography variant="h6">New Condition</Typography>
                        </Box>
                        <Box flexGrow={1} display="flex" >
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                                Purchase History
                                </InputLabel>
                                <Select
                                    native
                                    input={
                                        <OutlinedInput name="age" labelWidth={labelWidth} id="outlined-age-native-simple" />
                                    }
                                    >
                                    <option value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            <Button size="small" variant="contained" className={classes.addButton}>
                                <FontAwesomeIcon className={classes.addButtonIcon} color="#383838" size="xs" icon="plus"/>
                                Add
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Segments;
