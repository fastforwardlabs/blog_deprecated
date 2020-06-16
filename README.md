# DEPRECATED Fast Forward Labs Blog

Our blog lives here: http://blog.fastforwardlabs.com/

## Adding to the Reading List

You can add a link to the reading list, which show up as the "We are reading" links on the blog, using this tool https://ffl-is-reading.now.sh/.

## Adding a Post

Our blog is on Jekyll and posts are written in markdown. You can look at Jekyll documentation or previous posts to see how to format posts (better internal documentation coming soon!). Our blog is published automatically using Github pages so posts you put in the `_posts` folder will go live unless they have the metadata `published: false` at the beginning.

### FFL Specific Formatting

If the post looks good in Github's markdown preview it will probably look good (though slightly different) on the blog. We use H5's for image captions, in markdown you write H5's as `#####`.

### Adding Images

You can use https://ffl-is-reading.now.sh/ to add images for blog posts. It will let you upload an image and then give you a link to that image that you can paste into the markdown. If you want the image to show up in the github markdown preview you need to remove the `{{ site.github_url }}` from the start of the address. That part is only important for newsletter posts. The image will work on the actual blog with it included, however.
