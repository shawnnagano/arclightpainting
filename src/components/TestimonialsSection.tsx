import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  location: string;
  category: string;
  text: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "Frank B",
    location: "Bothell, WA",
    category: "House Painting",
    text: "From the initial quote appointment to the final walk through, this company, Arclight Painting, was a pleasure to work with. They were courteous and very communicative by texts and emails regarding our project! Even when there were glitches, they made it right and solved the problems. We were very happy with their work and do not hesitate to recommend them for jobs! They repaired areas so they're better than they were before! So much more than just new paint!",
  },
  {
    name: "Katia S",
    location: "Bothell, WA",
    category: "House Painting",
    text: "Daniel and Mark did an amazing job on my kitchen cabinets and island. They are both very professional, details oriented, the job was done in a timely manner. Great team and great company! I will not hesitate to use them again for a future project. Thank you again.",
  },
  {
    name: "Donna D",
    location: "Bothell, WA",
    category: "House Painting",
    text: "This Company sets the standard for Customer Service, Quality and Craftmanship! From the initial contact to project completion Arclight Painting communicated the timeline and expectations. Daily they arrived on time, cleaned up job site and provided the details on what the next day would hold. Locally owned and experienced team members, wouldn't hesitate to have them back!! Thank you Arclight our Exterior looks wonderful!!",
  },
  {
    name: "Lauren B",
    location: "Bothell, WA",
    category: "House Painting",
    text: "Friends we trust recommended Arclight and we couldn't have been happier with the result. This is THE BEST experience we have had with having work done on our house in the 11 years we have lived here. From the careful and detailed quote to the daily interactions with the team, we felt like Arclight was our partners in making our vision for our house become reality. We love the result and feel so lucky to have worked with them!",
  },
  {
    name: "Margie C",
    location: "Bothell, WA",
    category: "House Painting",
    text: "This company is very professional and organized. I felt that I was in good hands, and I was in good hands. Sandor was very pleasant and his work was meticulous. This was a small job: painting a door and the trim on some new windows. I am planning to use this company for some interior painting, and when my house exterior is repainted, I will probably use them as well. They really lived up to their A+ rating with the Better Business Bureau.",
  },
  {
    name: "Linda C",
    location: "Bothell, WA",
    category: "House Painting",
    text: "Roberto and Julio restored our Tigerwood deck including replacing some boards. They did a wonderful job. They were prompt, professional and efficient. Excellent communication throughout the project. Our deck looks like new!",
  },
];

const serviceTestimonials: Record<string, Testimonial[]> = {
  "Interior Painting": [
    { name: "Rachel M", location: "Bothell, WA", category: "Interior Painting", text: "Arclight transformed our living room and bedrooms beautifully. The color consultation was incredibly helpful — they suggested the perfect warm tones for our space. The crew was meticulous with prep work and the finish is flawless. Highly recommend for any interior project!" },
    { name: "Tom H", location: "Bothell, WA", category: "Interior Painting", text: "We had our entire main floor repainted and couldn't be happier. They moved furniture carefully, taped everything perfectly, and the walls look brand new. Clean, professional, and done ahead of schedule. Arclight is the real deal!" },
    { name: "Jessica L", location: "Bothell, WA", category: "Interior Painting", text: "After living with builder-grade paint for years, we finally called Arclight for a full interior repaint. What a difference! Every room feels fresh and bright. The team was friendly, tidy, and their attention to detail around trim and edges was impressive." },
    { name: "David K", location: "Bothell, WA", category: "Interior Painting", text: "Arclight painted our nursery and guest bedroom. They helped us pick safe, low-VOC paint and the finish is silky smooth. No drips, no mess, just beautiful work. We'll be calling them back for the rest of the house!" },
    { name: "Nina P", location: "Bothell, WA", category: "Interior Painting", text: "I was nervous about painting our open-concept space with different accent colors, but Arclight nailed it. The transitions between colors are seamless and the whole space feels cohesive. Outstanding interior painters!" },
    { name: "Greg W", location: "Bothell, WA", category: "Interior Painting", text: "Had Arclight repaint our hallways, stairwell, and three bedrooms. They were communicative every step of the way and finished right on time. The quality of their prep work really shows in the final result. Five stars!" },
  ],
  "Exterior Painting": [
    { name: "Steve R", location: "Bothell, WA", category: "Exterior Painting", text: "Our home's exterior was peeling and faded after 15 years. Arclight power washed, scraped, and prepped everything thoroughly before painting. The result is stunning — our house looks brand new! Neighbors keep asking who did the work." },
    { name: "Patricia G", location: "Bothell, WA", category: "Exterior Painting", text: "Arclight repainted our entire exterior including all the trim and fascia. They worked around the rain schedule perfectly and the paint job has held up beautifully through two Pacific Northwest winters already. Exceptional quality!" },
    { name: "Mike T", location: "Bothell, WA", category: "Exterior Painting", text: "We hired Arclight for exterior painting and wood rot repair. They replaced several damaged boards before painting and you can't even tell where the repairs were made. Professional crew, great communication, and a fantastic final result." },
    { name: "Karen J", location: "Bothell, WA", category: "Exterior Painting", text: "The curb appeal transformation is incredible. Arclight helped us choose a modern color scheme and executed it flawlessly. Every detail — from the garage door to the window trim — was painted with care. Worth every penny!" },
    { name: "Robert A", location: "Bothell, WA", category: "Exterior Painting", text: "After getting three quotes, we chose Arclight for our exterior repaint. Best decision we made! Their prep work was thorough, they used premium Sherwin-Williams paint, and the finish is smooth and even. Our home has never looked better." },
    { name: "Angela F", location: "Bothell, WA", category: "Exterior Painting", text: "Arclight painted our two-story home exterior in just four days. They were professional, punctual, and cleaned up perfectly every evening. The color we chose looks even better than we imagined. Highly recommend for exterior projects!" },
  ],
  "Cabinet Refinishing": [
    { name: "Katia S", location: "Bothell, WA", category: "Cabinet Refinishing", text: "Daniel and Mark did an amazing job on my kitchen cabinets and island. They are both very professional, details oriented, the job was done in a timely manner. Great team and great company! I will not hesitate to use them again for a future project. Thank you again." },
    { name: "Sandra M", location: "Bothell, WA", category: "Cabinet Refinishing", text: "Our 20-year-old oak cabinets look completely brand new after Arclight refinished them. The factory-smooth finish is incredible. We saved thousands compared to replacing them and love the result. Kitchen feels like a whole new room!" },
    { name: "Brian E", location: "Bothell, WA", category: "Cabinet Refinishing", text: "We debated replacing our cabinets but Arclight convinced us refinishing was the way to go. They were right! The transformation is stunning. They removed all doors, sprayed them offsite, and reinstalled everything perfectly." },
    { name: "Michelle D", location: "Bothell, WA", category: "Cabinet Refinishing", text: "Arclight refinished our bathroom vanity and kitchen cabinets. The attention to detail on the sanding and priming shows — the finish is glass-smooth. They even adjusted some hardware that wasn't sitting right. Above and beyond!" },
    { name: "Tony V", location: "Bothell, WA", category: "Cabinet Refinishing", text: "Went from honey oak to a beautiful white shaker look. Arclight's cabinet refinishing gave us a magazine-worthy kitchen for a fraction of the cost of new cabinets. The crew was clean, efficient, and incredibly skilled." },
    { name: "Lisa H", location: "Bothell, WA", category: "Cabinet Refinishing", text: "I researched cabinet refinishing companies extensively and Arclight stood out. Their process — multiple coats, proper cure times, premium paint — produces results that rival custom cabinetry. Our kitchen is completely transformed!" },
  ],
  "Drywall Repair": [
    { name: "Jakub K", location: "Bothell, WA", category: "Drywall Repair", text: "We've had several drywall jobs done over the years and Arclight has been my favorite of all of them… They look super smooth and completely like the original wall… Arclight was SO communicative throughout the whole process… Daniel arrived promptly at 8 am… and texted updates on progress." },
    { name: "Heather N", location: "Bothell, WA", category: "Drywall Repair", text: "After removing some built-in shelving, we had major drywall repair needed. Arclight patched, textured, and painted the walls so perfectly that you'd never know anything was there before. Clean, fast, and professional." },
    { name: "Carlos R", location: "Bothell, WA", category: "Drywall Repair", text: "Had several large holes and cracks from a bathroom renovation. Arclight's drywall repair was flawless — the texture matching is spot-on. They also painted the bathroom afterward and it looks amazing. Great one-stop solution!" },
    { name: "Amy B", location: "Bothell, WA", category: "Drywall Repair", text: "Our garage ceiling had significant drywall damage. Arclight repaired and repainted it all in one day. The finish is smooth and clean. Their drywall team clearly knows what they're doing. Very impressed with the results!" },
    { name: "Derek S", location: "Bothell, WA", category: "Drywall Repair", text: "We had nail pops and hairline cracks throughout our older home. Arclight fixed every single one and then painted the whole interior. The walls look perfect now — like a brand new build. Couldn't be happier!" },
    { name: "Maria L", location: "Bothell, WA", category: "Drywall Repair", text: "Arclight handled our drywall repair after we had new electrical work done. They patched multiple holes of various sizes and matched the orange peel texture perfectly. Professional, tidy, and great attention to detail." },
  ],
  "Pressure Washing": [
    { name: "Doug F", location: "Bothell, WA", category: "Pressure Washing", text: "Our driveway and walkways were covered in moss and algae. Arclight pressure washed everything and it looks like brand new concrete. The difference is night and day! They were careful around our landscaping too. Highly recommend!" },
    { name: "Sharon K", location: "Bothell, WA", category: "Pressure Washing", text: "Had our cedar deck pressure washed before staining. Arclight did a fantastic job removing years of grime without damaging the wood. The deck looks incredible now. They clearly know the right pressure settings for different surfaces." },
    { name: "Paul W", location: "Bothell, WA", category: "Pressure Washing", text: "Arclight pressure washed our home's siding, patio, and fence. Everything looks fresh and clean. They used eco-friendly solutions and the results were amazing. Our home has its curb appeal back! Great crew, great work." },
    { name: "Julie C", location: "Bothell, WA", category: "Pressure Washing", text: "We hired Arclight to pressure wash before they painted our exterior. The cleaning alone made a huge difference — years of Pacific Northwest grime gone in hours. Professional service and excellent results." },
    { name: "Alan T", location: "Bothell, WA", category: "Pressure Washing", text: "Our concrete patio was black with mold and looked terrible. After Arclight pressure washed it, it looks brand new. They also cleaned our gutters and siding while they were at it. Efficient and thorough — very happy!" },
    { name: "Cindy M", location: "Bothell, WA", category: "Pressure Washing", text: "Arclight pressure washed our entire property — house, garage, driveway, and walkways. The transformation was dramatic. They were professional, on time, and took care to protect our plants. Absolutely worth it!" },
  ],
  "Commercial Painting": [
    { name: "Richard P", location: "Bothell, WA", category: "Commercial Painting", text: "Arclight repainted our dental office over a weekend so we didn't lose any business days. The work was impeccable — clean lines, perfect finish, and they left the space spotless. Our patients have been complimenting the new look!" },
    { name: "Janet W", location: "Bothell, WA", category: "Commercial Painting", text: "We hired Arclight for our retail store remodel. They matched our brand colors perfectly and worked after hours to minimize disruption. The new paint job makes our store look modern and inviting. Professional from start to finish!" },
    { name: "Mark D", location: "Bothell, WA", category: "Commercial Painting", text: "Arclight painted our office building's common areas and conference rooms. They were flexible with scheduling, worked cleanly, and the results are outstanding. The durability of the commercial-grade paint they used is impressive." },
    { name: "Susan L", location: "Bothell, WA", category: "Commercial Painting", text: "Our restaurant needed a complete interior repaint. Arclight handled it over two nights and the transformation is incredible. They used durable, washable paint perfect for a food service environment. Couldn't ask for better service!" },
    { name: "Kevin B", location: "Bothell, WA", category: "Commercial Painting", text: "We manage several commercial properties and Arclight has become our go-to painting company. They're reliable, professional, and deliver consistent quality across every project. Their commercial team really knows their stuff." },
    { name: "Diana R", location: "Bothell, WA", category: "Commercial Painting", text: "Arclight painted our new chiropractic clinic with calming colors that match our brand perfectly. They handled everything from color consultation to final touch-ups. Our space looks welcoming and professional. Highly recommend for commercial work!" },
  ],
  "One-Day Painting Service": [
    { name: "Wendy H", location: "Bothell, WA", category: "One-Day Painting Service", text: "Booked the Painter-for-a-Day service and got so much done! Our painter touched up three rooms, painted the front door, and still had time to do our laundry room. Amazing value for the price. Will definitely book again!" },
    { name: "Chris N", location: "Bothell, WA", category: "One-Day Painting Service", text: "Perfect solution for our small project list. The painter knocked out our accent wall, baseboards, and hallway touch-ups in one day. No estimate needed, just booked and done. Super convenient and professional!" },
    { name: "Beth A", location: "Bothell, WA", category: "One-Day Painting Service", text: "We had a bunch of little painting projects we'd been putting off. The Painter-for-a-Day service was exactly what we needed. Our painter was skilled, efficient, and friendly. Every item on our checklist was completed beautifully!" },
    { name: "Ryan G", location: "Bothell, WA", category: "One-Day Painting Service", text: "Used the Painter-for-a-Day for touch-ups before selling our home. The painter fixed scuffs, painted trim, and freshened up the garage. Made a huge difference for the listing photos. Best $689 we spent on staging!" },
    { name: "Tara J", location: "Bothell, WA", category: "One-Day Painting Service", text: "Love this concept! Had our painter do an accent wall in the bedroom, paint the bathroom vanity, and touch up the kitchen. It's amazing what a pro can accomplish in 8 hours. Quality work, no hassle!" },
    { name: "Ed F", location: "Bothell, WA", category: "One-Day Painting Service", text: "Great service for small jobs that don't need a full crew. Our painter was experienced, brought quality materials, and worked efficiently all day. The results were professional-grade. Will be using this service regularly!" },
  ],
  "Color Consultation": [
    { name: "Megan R", location: "Bothell, WA", category: "Color Consultation", text: "I was so stuck on colors for our main floor — I'd been going back and forth for weeks. Their colorist did a video call, asked great questions about our style, and then sent mockups using photos of our actual rooms. Seeing the colors on our walls before we committed? Game changer. We love how everything turned out." },
    { name: "Hannah T", location: "Kirkland, WA", category: "Color Consultation", text: "We almost picked a color straight off Pinterest, but the consultation showed us how different it would look on our siding in real light. The mockups were eye-opening. She suggested a palette we never would've picked ourselves, and honestly it's perfect. So glad we didn't just wing it." },
    { name: "Jason W", location: "Woodinville, WA", category: "Color Consultation", text: "My wife and I had been arguing about exterior colors for months. Having an expert walk us through options and put test patches on the house settled everything. We could actually see what worked in our lighting instead of guessing from tiny swatches. We both love the result — and we're still married, ha!" },
    { name: "Christine B", location: "Redmond, WA", category: "Color Consultation", text: "I painted a room myself last year and hated it within a week. This time I got help picking the colors first and it made all the difference. They gave us a full plan with every color mapped out by room and surface. No second-guessing, no regret. Should've done this from the start." },
    { name: "Marcus D", location: "Kenmore, WA", category: "Color Consultation", text: "We had this fabric swatch we loved and wanted the walls to match. Their colorist nailed it — the custom match was spot on. She also put together a whole color plan so the painters knew exactly what went where. Made the whole project so much smoother." },
    { name: "Allison K", location: "Mill Creek, WA", category: "Color Consultation", text: "I always play it safe with paint and end up with beige everything. The consultation pushed me a little outside my comfort zone and I'm so glad it did. They showed me mockups of bolder options on my actual house and even did test patches so I could see them in person. Our neighbors keep complimenting the new colors!" },
  ],
};

const locationTestimonials: Record<string, Testimonial[]> = {
  "Bothell": defaultTestimonials,
  "Kirkland": [
    { name: "Jennifer A", location: "Kirkland, WA", category: "House Painting", text: "Arclight painted our lakefront home in Kirkland and the results are stunning. The crew was professional, on time, and incredibly detail-oriented. Our home stands out beautifully on the street. We've already recommended them to three neighbors!" },
    { name: "Scott M", location: "Kirkland, WA", category: "House Painting", text: "We hired Arclight for a full interior repaint of our Kirkland townhouse. The transformation is incredible — fresh, modern, and perfectly executed. They were respectful of our space and cleaned up thoroughly each day. Outstanding service!" },
    { name: "Deborah R", location: "Kirkland, WA", category: "House Painting", text: "Arclight refinished our kitchen cabinets at our Kirkland home and they look like custom cabinetry now. The team was meticulous and the factory-smooth finish is flawless. Best home improvement decision we've made!" },
    { name: "Nathan P", location: "Kirkland, WA", category: "House Painting", text: "Had Arclight paint our Kirkland home exterior including all the trim work. They navigated the steep lot perfectly and the paint job is beautiful. The Sherwin-Williams paint they used has held up great through the rain. Highly recommend!" },
    { name: "Amber L", location: "Kirkland, WA", category: "House Painting", text: "Our Kirkland condo needed a complete refresh. Arclight repainted every room, fixed some drywall issues, and even helped us pick colors. The whole process was stress-free and the results are gorgeous. Five stars!" },
    { name: "Victor S", location: "Kirkland, WA", category: "House Painting", text: "Arclight pressure washed and painted our Kirkland home's deck and fence. Everything looks brand new. They were professional, communicated well, and finished on schedule. Great local painters who take pride in their work!" },
  ],
  "Woodinville": [
    { name: "Gayle T", location: "Woodinville, WA", category: "House Painting", text: "Arclight painted our Woodinville farmhouse exterior and it looks absolutely beautiful. They carefully prepped all the old siding and the finish is flawless. Our home looks like it belongs in a magazine now. Can't say enough good things!" },
    { name: "Phil B", location: "Woodinville, WA", category: "House Painting", text: "We had Arclight repaint the interior of our Woodinville home after a remodel. The color consultation was incredibly helpful and the execution was perfect. Clean lines, no drips, and they respected our new flooring throughout." },
    { name: "Nancy K", location: "Woodinville, WA", category: "House Painting", text: "Arclight refinished all the cabinets in our Woodinville kitchen. The transformation from dated oak to modern white is stunning. Their process was thorough and the result is a factory-quality finish. So glad we chose them!" },
    { name: "Howard D", location: "Woodinville, WA", category: "House Painting", text: "Had our Woodinville home's deck and pergola stained by Arclight. They did beautiful work — even sanded down some rough spots first. The crew was friendly and professional. Our outdoor space looks incredible now!" },
    { name: "Diane W", location: "Woodinville, WA", category: "House Painting", text: "Arclight painted our wine country-style Woodinville home inside and out. The exterior colors they recommended complement the landscape perfectly. Impeccable workmanship and wonderful people to work with!" },
    { name: "Russell E", location: "Woodinville, WA", category: "House Painting", text: "We've used Arclight twice now at our Woodinville property — first for exterior and recently for interior. Both times the quality was exceptional. They're our go-to painters and we recommend them to everyone!" },
  ],
  "Kenmore": [
    { name: "Laura H", location: "Kenmore, WA", category: "House Painting", text: "Arclight painted our Kenmore home near the lake and the results are fantastic. The crew was careful with our landscaping and the exterior paint looks incredible. Our home really pops now. Best painters in the area!" },
    { name: "Keith G", location: "Kenmore, WA", category: "House Painting", text: "We hired Arclight for interior painting of our Kenmore split-level. They handled the vaulted ceilings and stairwell perfectly. Every wall is smooth and even. Great communication throughout the project. Would hire again in a heartbeat!" },
    { name: "Brenda F", location: "Kenmore, WA", category: "House Painting", text: "Arclight refinished our kitchen cabinets at our Kenmore home. The white finish they applied is gorgeous and has been super durable. The crew was clean and professional. Our kitchen looks completely transformed!" },
    { name: "Craig J", location: "Kenmore, WA", category: "House Painting", text: "Had Arclight pressure wash and repaint our Kenmore home's exterior. The difference is dramatic — our house went from tired-looking to beautiful. They used quality paint that should last for years. Excellent work!" },
    { name: "Sandy B", location: "Kenmore, WA", category: "House Painting", text: "Our Kenmore townhouse needed a full refresh and Arclight delivered. Drywall repairs, fresh paint throughout, and perfect trim work. They were professional, timely, and the results exceeded our expectations!" },
    { name: "Alex R", location: "Kenmore, WA", category: "House Painting", text: "Arclight painted our Kenmore home office during the pandemic so we'd have a nice workspace. They were in and out in a day, minimized disruption, and the room looks amazing. Professional service all the way!" },
  ],
  "Mill Creek": [
    { name: "Tammy W", location: "Mill Creek, WA", category: "House Painting", text: "Arclight painted our Mill Creek home exterior and it's absolutely gorgeous. The color scheme they helped us choose fits the neighborhood perfectly. Professional crew, excellent communication, and beautiful results!" },
    { name: "Dan S", location: "Mill Creek, WA", category: "House Painting", text: "Had our entire Mill Creek home interior painted by Arclight. Four bedrooms, living areas, and hallways — all done in four days. The quality is outstanding and they left everything spotless. Top-notch painters!" },
    { name: "Rebecca C", location: "Mill Creek, WA", category: "House Painting", text: "Arclight painted our Mill Creek home and handled some wood rot repair on the fascia. The repairs are invisible and the paint job is flawless. They really go above and beyond. Couldn't be more pleased!" },
    { name: "Lori A", location: "Mill Creek, WA", category: "House Painting", text: "We used Arclight for cabinet refinishing at our Mill Creek home. Our dated maple cabinets now look like brand new custom cabinetry. The transformation is incredible. Worth every penny and then some!" },
    { name: "Glenn M", location: "Mill Creek, WA", category: "House Painting", text: "Arclight pressure washed and stained our Mill Creek home's deck. It looks like the day it was built. They were careful, thorough, and the results speak for themselves. Great local painting company!" },
    { name: "Paula D", location: "Mill Creek, WA", category: "House Painting", text: "After interviewing several painters, we chose Arclight for our Mill Creek home. Best decision ever. They painted our exterior and interior and the quality is exceptional. Professional from the first call to the final walkthrough." },
  ],
  "Redmond": [
    { name: "Alice T", location: "Redmond, WA", category: "House Painting", text: "Arclight painted our Redmond home's interior and the results are beautiful. They helped us transition from dark colors to a light, modern palette. The prep work was thorough and the finish is smooth and even. Love our refreshed home!" },
    { name: "Bryan K", location: "Redmond, WA", category: "House Painting", text: "We had Arclight paint our Redmond townhome exterior. They worked around the HOA requirements perfectly and the result looks fantastic. Professional, punctual, and great quality work. Highly recommend!" },
    { name: "Monica J", location: "Redmond, WA", category: "House Painting", text: "Arclight refinished the cabinets in our Redmond kitchen and both bathrooms. The spray finish is incredibly smooth — better than the original factory finish. Our home feels completely updated. Amazing craftsmanship!" },
    { name: "Tyler R", location: "Redmond, WA", category: "House Painting", text: "Had Arclight do drywall repair and painting in our Redmond home after removing a wall. The patch is completely invisible. They matched the texture perfectly and the paint blends seamlessly. Excellent work!" },
    { name: "Hannah M", location: "Redmond, WA", category: "House Painting", text: "Our Redmond home needed a major exterior refresh. Arclight handled everything — power washing, repairs, and painting. The transformation is dramatic. Our home looks brand new and the neighbors are jealous!" },
    { name: "Oscar L", location: "Redmond, WA", category: "House Painting", text: "Used Arclight's Painter-for-a-Day at our Redmond home. Our painter knocked out touch-ups in five rooms plus painted our front door. Incredible value and convenience. Will definitely use this service again!" },
  ],
  "Cottage Lake": [
    { name: "Barbara N", location: "Cottage Lake, WA", category: "House Painting", text: "Arclight painted our Cottage Lake home and did an incredible job. The natural surroundings made color selection tricky but their consultation was spot-on. The exterior blends beautifully with the landscape. Wonderful experience!" },
    { name: "Jim D", location: "Cottage Lake, WA", category: "House Painting", text: "We hired Arclight to paint and stain our Cottage Lake cabin. They handled the cedar siding expertly and the stain color is perfect. The crew was respectful of our wooded property. Excellent craftsmanship!" },
    { name: "Carol F", location: "Cottage Lake, WA", category: "House Painting", text: "Arclight repainted our Cottage Lake home interior — every room plus hallways and trim. The attention to detail on the woodwork was impressive. Clean, efficient, and beautiful results. Our home feels brand new!" },
    { name: "Pete S", location: "Cottage Lake, WA", category: "House Painting", text: "Had Arclight paint our Cottage Lake home exterior including the deck. They prepped everything meticulously and the finish has held up great through the seasons. Professional team and outstanding quality!" },
    { name: "Martha H", location: "Cottage Lake, WA", category: "House Painting", text: "Our Cottage Lake home needed cabinet refinishing and Arclight delivered beautifully. The kitchen looks completely transformed. They were professional, tidy, and the results exceeded our expectations. Highly recommend!" },
    { name: "Roy G", location: "Cottage Lake, WA", category: "House Painting", text: "Arclight pressure washed our entire Cottage Lake property — house, driveway, and walkways. Everything looks fresh and clean. They were careful around our garden beds. Great service and fantastic results!" },
  ],
  "Union Hill": [
    { name: "Ellen C", location: "Union Hill, WA", category: "House Painting", text: "Arclight painted our Union Hill home and the results are beautiful. The mountain views from our home are now complemented by a fresh, modern exterior. The crew was professional and the quality is top-notch!" },
    { name: "Stan W", location: "Union Hill, WA", category: "House Painting", text: "We hired Arclight for interior painting at our Union Hill property. They handled high ceilings and large open spaces expertly. The color transitions between rooms are seamless. Excellent team and beautiful work!" },
    { name: "Connie P", location: "Union Hill, WA", category: "House Painting", text: "Arclight repainted our Union Hill farmhouse exterior. They carefully prepped all the old wood siding and the finish is gorgeous. Our historic home looks refreshed while keeping its character. Wonderful painters!" },
    { name: "Wayne R", location: "Union Hill, WA", category: "House Painting", text: "Had Arclight do drywall repair and painting at our Union Hill home after a renovation. The patches are completely invisible and the paint looks perfect. Fast, professional, and great results!" },
    { name: "Joanne T", location: "Union Hill, WA", category: "House Painting", text: "Our Union Hill home needed a complete exterior refresh. Arclight delivered beautifully — from power washing to the final coat. The crew was friendly, hardworking, and meticulous. Our home looks amazing!" },
    { name: "Dennis B", location: "Union Hill, WA", category: "House Painting", text: "Arclight painted our Union Hill home's deck and railings. The stain they recommended holds up great against the elements. Professional service from start to finish. We'll definitely use them again!" },
  ],
  "Clearview": [
    { name: "Irene S", location: "Clearview, WA", category: "House Painting", text: "Arclight painted our Clearview home and we couldn't be happier. The Snohomish Valley views are now framed by a beautifully painted exterior. The crew was careful, professional, and delivered outstanding quality!" },
    { name: "Harold M", location: "Clearview, WA", category: "House Painting", text: "We had Arclight repaint our Clearview farmhouse inside and out. The transformation is incredible. They matched colors perfectly to our rural setting and the quality of work is exceptional. Best painters we've ever hired!" },
    { name: "Joyce K", location: "Clearview, WA", category: "House Painting", text: "Arclight handled exterior painting and wood repair at our Clearview property. They replaced rotted fascia boards and painted everything to match. You can't tell what was new vs original. Excellent craftsmanship!" },
    { name: "Ray L", location: "Clearview, WA", category: "House Painting", text: "Had our Clearview home's interior painted by Arclight. The crew was professional, clean, and the results are beautiful. They navigated our open floor plan perfectly with different accent walls. Love it!" },
    { name: "Vivian D", location: "Clearview, WA", category: "House Painting", text: "Arclight stained and sealed our Clearview home's deck and fence. Everything looks fresh and protected for the seasons ahead. The team was efficient and the results are fantastic. Highly recommend!" },
    { name: "Cliff N", location: "Clearview, WA", category: "House Painting", text: "Our Clearview home needed a major refresh and Arclight delivered. Exterior painting, pressure washing, and some drywall repair — all done professionally and on schedule. Great experience from start to finish!" },
  ],
  "Juanita": [
    { name: "Megan C", location: "Juanita, WA", category: "House Painting", text: "Arclight painted our Juanita home near the beach and it looks amazing. The color scheme they recommended really captures the waterfront vibe. Professional crew, great communication, and beautiful results!" },
    { name: "Blake T", location: "Juanita, WA", category: "House Painting", text: "We hired Arclight to paint the interior of our Juanita condo. They transformed our dated space into something modern and fresh. The quality of their work is outstanding. Clean, fast, and great attention to detail!" },
    { name: "Ruth A", location: "Juanita, WA", category: "House Painting", text: "Arclight painted our Juanita home exterior and repaired some water-damaged trim. The repairs are invisible and the paint job is flawless. They were a pleasure to work with and we love the results!" },
    { name: "Henry F", location: "Juanita, WA", category: "House Painting", text: "Had Arclight refinish our kitchen cabinets at our Juanita home. From old oak to crisp white — the transformation is dramatic. Professional process and a stunning factory-smooth finish. Highly recommend!" },
    { name: "Elaine J", location: "Juanita, WA", category: "House Painting", text: "Our Juanita townhouse needed a full interior repaint before selling. Arclight did an amazing job — neutral colors, clean lines, and they finished in three days. The house sold quickly! Great work!" },
    { name: "Oscar W", location: "Juanita, WA", category: "House Painting", text: "Arclight pressure washed our Juanita home and patio. The algae and moss are completely gone and everything looks fresh. Quick, professional service. Planning to have them back for painting next spring!" },
  ],
  "Totem Lake": [
    { name: "Cathy R", location: "Totem Lake, WA", category: "House Painting", text: "Arclight painted our Totem Lake home and the quality is exceptional. They handled our two-story exterior with ease and the finish is beautiful. The crew was professional and communicative throughout. Highly recommend!" },
    { name: "Leo P", location: "Totem Lake, WA", category: "House Painting", text: "We had Arclight repaint our Totem Lake townhome interior. They worked efficiently in the compact spaces and the results are gorgeous. Fresh, clean walls with perfect trim work. Great value for the quality!" },
    { name: "Janet S", location: "Totem Lake, WA", category: "House Painting", text: "Arclight refinished cabinets at our Totem Lake condo and they look incredible. The smooth finish rivals custom cabinetry. They were respectful of our living space and cleaned up perfectly. Amazing transformation!" },
    { name: "Marvin K", location: "Totem Lake, WA", category: "House Painting", text: "Had Arclight do exterior painting and pressure washing at our Totem Lake home. The before and after is dramatic. Professional service, quality materials, and excellent results. Our home looks brand new!" },
    { name: "Sylvia H", location: "Totem Lake, WA", category: "House Painting", text: "Our Totem Lake home needed interior drywall repair and painting. Arclight handled both seamlessly — patches are invisible and the paint is flawless. They made the whole process easy. Very impressed!" },
    { name: "George E", location: "Totem Lake, WA", category: "House Painting", text: "Arclight painted our Totem Lake home's deck and exterior trim. The attention to detail on the trim work was impressive. They used premium products and the finish has been holding up beautifully. Five stars!" },
  ],
  "Kingsgate": [
    { name: "Pam V", location: "Kingsgate, WA", category: "House Painting", text: "Arclight painted our Kingsgate home's exterior and it looks spectacular. They helped us modernize the color scheme and executed it perfectly. The neighbors have been asking for their contact info. Wonderful experience!" },
    { name: "Art B", location: "Kingsgate, WA", category: "House Painting", text: "We hired Arclight to paint the interior of our Kingsgate home. Five rooms, two hallways, and all the trim — done beautifully in less than a week. The quality is outstanding and the crew was a pleasure to work with!" },
    { name: "Gloria N", location: "Kingsgate, WA", category: "House Painting", text: "Arclight refinished our bathroom and kitchen cabinets at our Kingsgate home. Both rooms look brand new. The spray finish is silky smooth and the color matching between rooms is perfect. Incredible work!" },
    { name: "Rick D", location: "Kingsgate, WA", category: "House Painting", text: "Had Arclight do exterior painting and wood rot repair at our Kingsgate property. They replaced damaged boards and painted everything to match flawlessly. Professional, thorough, and excellent quality!" },
    { name: "Lillian M", location: "Kingsgate, WA", category: "House Painting", text: "Our Kingsgate home needed a fresh look and Arclight delivered. Interior painting, accent walls, and trim work — all done with precision. The crew was courteous and the results are beautiful. Highly recommend!" },
    { name: "Troy J", location: "Kingsgate, WA", category: "House Painting", text: "Arclight pressure washed and painted our Kingsgate home's fence and deck. The outdoor spaces look fantastic now. They were efficient, professional, and the results exceeded our expectations. Great painting company!" },
  ],
  "Seattle": [
    { name: "Brooke W", location: "Seattle, WA", category: "House Painting", text: "Arclight painted our Capitol Hill Craftsman and the results are incredible. They understood the character of our 1920s home and chose finishes that honor its history while giving it a fresh, modern feel. Meticulous prep work and beautiful execution!" },
    { name: "Jason T", location: "Seattle, WA", category: "House Painting", text: "We hired Arclight for a full exterior repaint of our Ballard bungalow. The crew navigated our narrow lot perfectly and the color scheme looks amazing. Our home stands out on the block now. Professional from start to finish!" },
    { name: "Melissa K", location: "Seattle, WA", category: "House Painting", text: "Arclight refinished the cabinets in our Wallingford kitchen and they look like custom cabinetry. The spray finish is flawless — glass smooth. They were tidy, professional, and the transformation is stunning. Couldn't be happier!" },
    { name: "Andre P", location: "Seattle, WA", category: "House Painting", text: "Had Arclight paint our Queen Anne Victorian's interior — high ceilings, detailed trim, and all. The crew handled every architectural detail with care. The colors we chose look even better than we imagined. Truly skilled painters!" },
    { name: "Christine L", location: "Seattle, WA", category: "House Painting", text: "Our Greenwood home needed a major exterior refresh. Arclight handled power washing, wood repair, and a complete repaint. The difference is night and day — our house looks brand new. The neighbors are impressed and so are we!" },
    { name: "Marcus D", location: "Seattle, WA", category: "House Painting", text: "Arclight painted our West Seattle condo interior and did drywall repairs throughout. Every patch is invisible and the paint is perfectly even. They finished on schedule and left the place spotless. Five stars, easy!" },
  ],
};

function getTestimonials(cityName?: string, serviceName?: string): Testimonial[] {
  if (serviceName && serviceTestimonials[serviceName]) {
    return serviceTestimonials[serviceName];
  }
  if (cityName && locationTestimonials[cityName]) {
    return locationTestimonials[cityName];
  }
  return defaultTestimonials;
}

function getHeading(cityName?: string, serviceName?: string): JSX.Element {
  if (serviceName === "One-Day Painting Service") {
    return (
      <>Why People <span className="text-accent">Love</span> our Painter-for-a-Day Service</>
    );
  }
  if (serviceName) {
    return (
      <>Why People <span className="text-accent">Love Us</span> for {serviceName}</>
    );
  }
  if (cityName) {
    return (
      <>Why People in {cityName} <span className="text-accent">Love Us</span></>
    );
  }
  return (
    <>Why People <span className="text-accent">Love Us</span></>
  );
}

interface TestimonialsSectionProps {
  cityName?: string;
  serviceName?: string;
}

const TestimonialsSection = ({ cityName, serviceName }: TestimonialsSectionProps) => {
  const testimonials = getTestimonials(cityName, serviceName);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="review" className="pt-20 pb-8 bg-secondary relative">

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          {getHeading(cityName, serviceName)}
        </h2>

        {/* Slider */}
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-card rounded-xl p-8 md:p-10 border border-border/50 shadow-lg text-center">

            {/* Quote icon */}
            <Quote className="h-8 w-8 text-accent/30 mx-auto mb-4" />


            {/* Text */}
            <p className="text-muted-foreground leading-relaxed mb-6">{t.text}</p>

            {/* Author */}
            <p className="font-bold">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.location}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous review">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-accent" : "bg-border"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next review">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Read All Reviews */}
        <div className="text-center mt-8">
          <Link to="/reviews">
            <Button variant="outline" className="font-semibold">
              Read All Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
