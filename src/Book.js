import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        display: 'flex',
        marginBottom: 15
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 160,
    }
});

function MediaControlCard(props) {
    const { classes, theme } = props;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={props.image}
                title={props.title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                       Language: {props.language}
                    </Typography>
                </CardContent>

            </div>

        </Card>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
