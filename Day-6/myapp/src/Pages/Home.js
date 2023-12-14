import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Home = () => {
    const Item = styled(Paper)(() => ({
        textAlign: 'center',
    }));
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <>
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={5}>

                        <Grid item xs={4}>
                            <Item>card1</Item>
                            <Card sx={{ minWidth: 375, backgroundColor:'red' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Day
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>card2</Item>
                            <Card sx={{ minWidth: 375, backgroundColor:'pink'  }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Monday
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>card3</Item>
                            <Card sx={{ minWidth: 475, backgroundColor:'purple'  }}>
                                <CardContent>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        adjective
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>card4</Item>
                            <Card sx={{ minWidth: 375, backgroundColor:'blue'  }}>
                                <CardContent>
                                    <Typography variant="body2">
                                       Good
                                        <br />
                                      
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>card5</Item>
                            <Card sx={{ minWidth: 375, backgroundColor:'green' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Me
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}
export default Home
