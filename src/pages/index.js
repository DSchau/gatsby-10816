import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => {
    let u = new URL("http://example.com/foo.html");
    u.search = "bar=baz";
    return <h1>{u.toString()}</h1>;
}

export default IndexPage
