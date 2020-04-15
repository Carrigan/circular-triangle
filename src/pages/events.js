import React from "react"
import PageContainer from "../components/page_container";

export default () =>
  <PageContainer active="events">
    <div class="h-centered calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=amVubmlmZXJoaWxsLmNvX2oxazNmbW43MGUxZ3B2M251dDNpamdxYnI4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23EF6C00&amp;showTabs=0&amp;showPrint=0&amp;title=Circular%20Triangle"
        style={{ border: "solid 1px #777" }}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no">
      </iframe>
    </div>
  </PageContainer>
