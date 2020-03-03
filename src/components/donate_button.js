import React from "react"

export default () => 
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="3JTQFMPP4D5V2" />
    
    <input type="submit" class="donate-button" value="Donate to Circular Triangle" />
  </form>
