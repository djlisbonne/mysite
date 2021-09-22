import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/styles.css"
import { BsArrowLeftShort } from "react-icons/bs"

const Notebook8 = () => (
  <Layout>
    <Seo title="Rating Distribution" />
    <div class="notebook">
        <h1><Link to="/coding/"><BsArrowLeftShort/></Link>Rating Distribution of Lichess Dataset</h1>
        <h6>Link to Jupyter notebook code <a href="https://github.com/djlisbonne/ChessAnalysis/blob/main/rating_distributions.ipynb" target="_blank">here</a>.</h6>
        <hr/>
        <h3>Introduction</h3>
        <p id="first">
            As part of my larger data analysis project using the Lichess database, I wanted to better visualize the distribution of games
            over the average player rating. I felt that to better contextualize some of my other analyses, understanding 
            how the games were concentrated by rating -- for both rated and unrated games -- would be a valuable addition.
        </p>
        <h3>The Notebook</h3>
        <p id="first">
            The first cells of the notebook import the necessary libraries, load the Lichess games,
            and select the sections of data that are needed for the notebook. In this case, I'm using Pandas for 
            data formatting and manipulation, and Matplotlib to create the lineplots.
        </p>
        <StaticImage class="cellScreenshot" src="../images/distribution_first_image.png" alt="loading initial data"/>
        <p>
            After loading the data, I needed to group the number of games over ranges of the players' average rating
            since otherwise, there would be tons of unqiue points, which would distort the graph. In order to achieve
            this, I looped through the rows in the <i>rated_games</i> DataFrame, and summed the number of 
            games in the range. By adding the new data as <i>(key, value)</i> pairs in a dictionary, 
            it was easy to leverage Pandas' flexbility to create a new Dataframe from those values. 
        </p>
        <StaticImage class="cellScreenshot" src="../images/rated_games_sorting.png" alt="sorting rated games"/>
        <p>
            The same process was used for the <i>unrated_games</i> DataFrame, to organize the data in the same way.
        </p>
        <StaticImage class="cellScreenshot" src="../images/unrated_games_sorting.png" alt="sorting unrated games"/>
        <p>
            After having sorted the data into chunks, all that was left was to create the two plots!
            For this, I used Matplotlib as a lightweight graphing tool, since the graphs themselves didn't need 
            to be too complex here. I elected to combine the two graphs into a single figure, with two subplots.
        </p>
        <StaticImage class="cellScreenshot" src="../images/plotting_code.png" alt="plotting code"/>
        <p>
            <strong>Here are the final graphs: </strong>
        </p>
        <div class="constrain-static-img">
            <StaticImage class="cellScreenshot" src="../images/distribution_graphs.png" alt="final graphs"/>
        </div>
    </div>
  </Layout>
)

export default Notebook8
