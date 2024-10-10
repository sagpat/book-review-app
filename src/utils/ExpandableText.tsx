import React, { useState } from "react";

import { 
    Typography, 
    Button
} from '@mui/material';

const ExpandableText: React.FC<{ text: string; maxLength: number }> = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldTruncate = text.length > maxLength;
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <>
        <Typography component="span" variant="body2">
          {isExpanded || !shouldTruncate ? text : `${text.slice(0, maxLength)}...`}
        </Typography>
        {shouldTruncate && (
          <Button onClick={toggleExpand} size="small" sx={{ ml: 1 }}>
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
        )}
      </>
    );
  };

  export default ExpandableText;