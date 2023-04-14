let judges_info = [
    {
        name: 'Anup Pai',
        image_path: 'Anup_Pai.webp',
        email: '',
        linkedin: 'https://www.linkedin.com/in/paianup/',
        designation: 'Founder and CEO - eSamudaay | Fintellix Solutions (formerly iCreate) Founder'
    },
    {
        name: 'Rakesh Ravuri',
        image_path: 'Rakesh_Ravuri.webp',
        email: '',
        linkedin: 'https://www.linkedin.com/in/rakeshravuri/',
        designation: 'Engineering leader & CTO @ Publicis Sapient, building world-class engineering teams'
    },
    {
        name: 'Ravi Haldipur',
        image_path: 'Ravi_Haldipur.webp',
        email: '',
        linkedin: 'https://www.linkedin.com/in/ravi-haldipur/',
        designation: 'Co-Founder & Head of Business Development at eSamudaay'
    },
    {
        name: 'Aditi Gupta',
        image_path: 'Aditi_Gupta.webp',
        email: 'guptaaditi1709@gmail.com',
        linkedin: 'https://www.linkedin.com/in/aditigupta17/',
        designation: 'Software Engineer at Google | GSoC 2020, CERN-HSF | Tata Crucible Campus Quiz Regional Winner 2019, 2020'
    },
    {
        name: 'Manan Poddar',
        image_path: 'Manan_Poddar.webp',
        email: 'mananpoddarm@gmail.com',
        linkedin: 'https://www.linkedin.com/in/manan-poddar-59226314a/',
        designation: 'Software engineer at Airbnb | CSE @ National Institute of Technology Karnataka'
    },
    {
        name: 'Denver Dsouza',
        image_path: 'Denver_Dsouza.webp',
        email: '',
        linkedin: 'https://in.linkedin.com/in/denverjude',
        designation: 'Chief Operating Officer - Devfolio'
    },
    {
        name: 'Aniket Raj',
        image_path: 'Aniket_Raj.webp',
        email: '',
        linkedin: 'https://in.linkedin.com/in/aniketraj1',
        designation: 'Community Lead - Devfolio'
    },
    {
        name: 'Anish Dhiman',
        image_path: 'Anish_Dhiman.webp',
        email: '',
        linkedin: 'https://www.linkedin.com/in/manan-poddar-59226314a/',
        designation: 'Product Designer - Devfolio'
    },
]

function insert_in_div(insert_div, persons) {
    persons.forEach((person) => {
        if (person.designation === undefined) person.designation = ''
        div_text = `
        <div class="col-12 col-sm-6 col-lg-4 teams">

          <div class="card" data-aos="zoom-in">
          <div class="card-top">
          <!-- Profile_photo -->
          <div class="pic">
              <img src="./img/judges/` + person.image_path + `" alt="">
          </div>

            <!-- Info -->
            <div class="member-info">
            <span class="name"><h5>` + person.name + `</h5></span>
            <span class="post">` + person.designation + `</span>
            </div>

            <!-- Social Info -->
            <ul class="social">
               <li><a href="` + "mailto:" + person.email + `" class="fa fa-envelope"></a></li>
               <li><a href="` + person.linkedin + `" class="fa fa-linkedin"></a></li>
           </ul>

          </div>
        </div>
        </div>
            `
        insert_div.innerHTML += div_text
    })
}


var judges_div = document.getElementById('judges').getElementsByClassName('row')[0]
insert_in_div(judges_div, judges_info)
