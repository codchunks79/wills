
/*****************
Bootstrap Grid
******************/

Vue.component('row-one',{
  template:`
<div class="row marginOne"><slot></slot></div>
  `
});

Vue.component('row-two',{
  template:`
<div class="row"><slot></slot></div>
  `
});

Vue.component('col-10',{
  template:`
  <div class="col-12 col-md-10"><slot></slot></div>
  `
});

Vue.component('col-9',{
  template:`
  <div class="col-12 col-md-9"><slot></slot></div>
  `
});

Vue.component('col-8',{
  template:`
  <div class="col-12 col-md-8"><slot></slot></div>
  `
});

Vue.component('col-7',{
  template:`
  <div class="col-12 col-md-7"><slot></slot></div>
  `
});

Vue.component('col-12',{
  template:`
  <div class="col-12 col-md-12"><slot></slot></div>
  `
});

Vue.component('col-4',{
    template:`
    <div class="col-12 col-md-4"><slot></slot></div>
    `
});

Vue.component('col-2',{
    template:`
    <div class="col-12 col-md-2"><slot></slot></div>
    `
});

Vue.component('col-6',{
    template:`
    <div class="col-12 col-md-6"><slot></slot></div>
    `
});



/*****************
END Bootstrap Grid
******************/

/*****************
Modal
******************/



Vue.component('modal-one',{
  template: `
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('modal-two',{
  template: `
  <div class="modal fade" id="exampleModalCenterTwo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('modal-three',{
  template: `
  <div class="modal fade" id="exampleModalCenterThree" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('modal-four',{
  template: `
  <div class="modal fade" id="exampleModalCenterFour" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('modal-five',{
  template: `
  <div class="modal fade" id="exampleModalCenterFive" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('modal-six',{
  template: `
  <div class="modal fade" id="exampleModalCenterSix" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('modal-seven',{
  template: `
  <div class="modal fade" id="exampleModalCenterSeven" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
});

Vue.component('modal-eight',{
  template: `
  <div class="modal fade" id="exampleModalCenterEight" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
  `
  });

/*****************
END Modal
******************/


/*****************
FORMS
******************/

Vue.component('form-one-name',{
  template:`<input type="input" class="primaryInput " placeholder="Fist Name" required>`
})
Vue.component('form-full-name',{
  template:`<input type="input" class="primaryInput " placeholder="Full Name" required>`
})

Vue.component('form-last-name',{
  template:`<input type="input" class="primaryInput " placeholder="Last Name" required>`
})

Vue.component('form-one-email',{
  template:'<input type="input" class="primaryInput " placeholder="Email" required>'
})

Vue.component('form-one-tel',{
  template:'<input type="input" class="primaryInput " placeholder="Tel" required>'
})

Vue.component('life-ref',{
  template:'<input type="input" class="primaryInput " placeholder="Lifetime Legal Ref Number" required>'
})

Vue.component('user-name',{
  template:'<input type="input" class="primaryInput " placeholder="Username" required>'
})

Vue.component('password-one',{
  template:'<input type="password" class="primaryInput " placeholder="Password" required>'
})

Vue.component('postcode-one',{
  template:'<input type="input" class="primaryInput " placeholder="Your postcode" required>'
})

Vue.component('date-one',{
  template:'<input type="input" class="primaryInput " placeholder="DD" required>'
})

Vue.component('month-one',{
  template:'<input type="input" class="primaryInput " placeholder="MM" required>'
})

Vue.component('year-one',{
  template:'<input type="input" class="primaryInput " placeholder="YYYY" required>'
})

/*****************
END FORMS
******************/

/*****************
CARDS
******************/

Vue.component('card-hover',{
    template:`
    <div class="card-hover">
    <slot></slot>
    </div><!-- End Card -->
    `
});

Vue.component('card-one-no-center-text',{
    template:`
    <div class="card">
    <slot></slot>
    </div><!-- End Card -->
    `
});

Vue.component('card-one',{
    template:`
    <div class="card text-center">
    <slot></slot>
    </div><!-- End Card -->
    `
});

/*****************
END CARDS
******************/

/*****************
Buttons
******************/
Vue.component('button-main',{
  template:`
    <button class='primaryContainedTwo' type="button"><slot></slot></button>
  `
})
/*****************
END Buttons
******************/



/*****************
FOOTER
******************/

Vue.component('footer-main',{
  template: `
  <footer>
        <div class="row marginOne">
          <div class="col-12 col-md-4">
            <h3>About us</h3>
            <p class="small">Lifetime Legal offers a new and cost-effective way of dealing with all things legal, our ethos is simple – “Everyone should have access to legal advice when they need it without fear of  cost.”</p>
            <p class="small">Joining Lifetime Legal gives you access to our expert legal advice line, protection against unexpected legal fees and valuable discounts on our full range of legal services.</p>
        </div><!-- End Col -->

        <div class="col-12 col-md-4">
          <h3>Contact us</h3>
          <p class="small">Lifetime Legal Ltd Second Floor Office Suite, Marlin, 459 London Road, Camberley, Surrey GU15 3JA</p>
          <p class="small">Tel: 0344 880 2087</p>
        </div><!-- End Col -->

        <div class="col-12 col-md-4">
          <h3>Legal notices</h3>
          <p class="small">Privacy Notice & Cookie Policy</p>
          <p class="small">Registered Office: Second Floor Office, Suite, 459 London Road, Camberley, Surrey GU15 3JA, UK</p>
          <p class="small">Company Registered in England No: 07316258</p>
        </div><!-- End Col -->
        </div><!-- End Row -->

  </footer>
  `
});

/*****************
END FOOTER
******************/


Vue.component('mirror-will-data',{
	template: `<div class="mirror-will-data"><h3 class="marginOneBottom">Why use Mirror Wills?</h3>
  <p class="line">Appointing an executor — the person you want to handle the administration of your estate. </p>
  <p class="line">Naming your beneficiaries — who will benefit from your estate. This could be a partner, children, family members, friends or charities. </p>
  <p class="line">The distribution of your estate — how you want your estate divided between your beneficiaries. </p>
  <p class="line">Designating guardians for your children —  who you would want to look after your children who are under the age of 18.</p>
  <p class="line">Designating who will manage your children’s Inheritance —  who you would want to be responsible for protecting, managing and distributing your children’s inheritance.</p>
  <p class="line">The distribution of gifts — choose to leave someone a gift. This may be a
                  specified cash amount or a specific possession.</p></div>`,

});

Vue.component('single-will-data',{
	template: `  <div class="single-will-data"><h3 class="marginOneBottom">Why use Single Wills?</h3>
    <p class="line">Appointing an executor — The person you want to handle the administration of your estate.You can both choose the same person as executor or 2 separate executors. Alternatively, you can choose each other with a backup executor upon the second death. </p>
    <p class="line">Naming your beneficiaries — Who will benefit from your estate. This could be a partner, children, family members, friends or reflected in both Wills to achieve the same or a similar outcome. </p>
    <p class="line">The distribution of your estate — how you want your estate divided between your beneficiaries. These wishes can be reflected in both similar outcome.  </p>
    <p class="line">The distribution of gifts — choose to leave someone a gift. This may be a specified cash amount or a specific possession. These wishes can be reflected in both Wills or each Will can have individual gift requests.</p>
    <p class="line">Designating guardians for your children. – Who you would want to look after your children who are under the age of 18.</p>
    <p class="line">Designating who will manage your children’s Inheritance. – Who you would want to be responsible for protecting, managing and distributing your children’s inheritance.</p></div>`,

});




new Vue({
  el:"#root",
  data:{
    newItem: "",
    name: "Ross"
  }
});



/***********
jquery
*///////////
$(document).ready(function(){
  $(".click").click(function(){
     $(".single-will-data").toggleClass("hide-box");
     $(".mirror-will-data").toggleClass("show-box");
 });
});

$(function(){

  $(".click-me").on('click', function(){
      $(this).toggleClass("selected");
});//end click

});//end function

$(function(){
  $(".alertButton").on('click', function(){
    $(function() {
  if ($(".click-me").hasClass("selected")) {
    window.location.replace("more-about-you.html");
  }else {
 alert('You need to select a status to proceed!');
  }
});//End Nested Function
});//end click
});//end function


/***********
End jquery
*///////////
