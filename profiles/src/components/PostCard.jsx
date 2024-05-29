import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { posts } from '../api/postsData';
import { Grid } from '@mui/material';
import Comments from './Comments';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expandedPostId, setExpandedPostId] = React.useState(null);
  const [likedPosts, setLikedPosts] = React.useState({});

  const handleExpandClick = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const handleLikeClick = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleShareClick = (postId) => {
    const postUrl = `http://localhost:3000/posts/${postId}`;
    navigator.clipboard.writeText(postUrl).then(() => {
      alert('Ссылка скопирована в буфер обмена!');
    }, (err) => {
      console.error('Ошибка копирования ссылки: ', err);
    });
  };

  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: 50 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post.id}> 
          <Card sx={{ maxWidth: 700 }} style={{ margin: 'auto', marginTop: 50 }}> 
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title={post.title}
              subheader={post.date}
            />
            <CardMedia
              component="img"
              height="400"
              image={post.image}
              alt={post.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleLikeClick(post.id)}
                sx={{ color: likedPosts[post.id] ? red[500] : undefined }}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton
                aria-label="share"
                onClick={() => handleShareClick(post.id)}
              >
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expandedPostId === post.id}
                onClick={() => handleExpandClick(post.id)}
                aria-expanded={expandedPostId === post.id}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expandedPostId === post.id} timeout="auto" unmountOnExit>
              <Comments
                commentsUrl="http://localhost:3004/comments"
                currentUserId="1"
              />
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
