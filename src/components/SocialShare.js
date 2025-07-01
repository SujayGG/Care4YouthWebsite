import React from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from 'react-share';

const SocialShare = ({ url, title }) => {
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
      <Typography variant="body2" sx={{ color: '#6b7280', mr: 1 }}>
        Share this page:
      </Typography>
      <Tooltip title="Share on Facebook">
        <span>
          <FacebookShareButton url={shareUrl} quote={shareTitle}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </span>
      </Tooltip>
      <Tooltip title="Share on Twitter">
        <span>
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </span>
      </Tooltip>
      <Tooltip title="Share on WhatsApp">
        <span>
          <WhatsappShareButton url={shareUrl} title={shareTitle}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </span>
      </Tooltip>
      <Tooltip title="Share via Email">
        <span>
          <EmailShareButton url={shareUrl} subject={shareTitle} body={shareUrl}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </span>
      </Tooltip>
    </Box>
  );
};

export default SocialShare; 