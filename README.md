# Fast Forward Labs Blog

Our blog lives here: http://blog.fastforwardlabs.com/

## Adding a Link to the Link List

Link blocks are used to fill in gaps between posts in the blog. You can see a list of all added links at http://blog.fastforwardlabs.com/links.html.

Add a link by editing and adding to the list at https://github.com/fastforwardlabs/blog/blob/master/_data/links.yml. Edit by clicking the pencil icon in the top right of the file view. Follow the format of `url`, `text`, `image` (look at previous entries to the list and you'll get the idea). **Add to the bottom of the list to make sure your new link appears at the top of the blog**.

Once you have added the new link to the list, name your commit update and commit it to save the addition. The site will automatically update with the link. It shouldn't take longer than around 30 seconds to see your new link on the blog homepage and the link list (http://blog.fastforwardlabs.com/links.html).

### Dealing with Images

#### Option 1: Copy Image URL

Since I imagine we will also be sharing most of the links here on Slack, an easy way to get an image URL is to post the link in Slack, then right-click and 'Copy Image URL' from the image in the link preview that Slack pulls. This image will be one the host website has selected for sharing, so it will not be subject to the same rate-limiting that linking to an image from inside the article might.

#### Option 2: Upload to Github

If you want to upload an image to use in the share link, go to https://github.com/fastforwardlabs/blog/tree/master/images/link_images and drag and drop the image you want to share onto the web page to upload it. Save the upload by naming and committing the change. You can then add the image url to the link list as `http://blog.fastforwardlabs.com/images/link_images/UPLOADED_IMAGE_FILENAME`. 

#### Option 3: Upload to Imgur

You can also use [Imgur](http://imgur.com/). Drag and drop the image to upload, then hover over the image and use the dropdown in the top right to get the share link. You will need a link with the file extension (.jpg, .png, .gif, etc.) for the image to work. You can get that full link from the 'Markdown (Reddit)' share url (you only want the url, discard the surrounding stuff).
