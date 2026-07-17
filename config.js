/* ============================================================
   THE PHOTO DUEL — SITE CONFIG
   This is the only file you need to edit.
   ============================================================ */

window.DUEL_CONFIG = {

  eventTitle: "The Photo Duel",
  eventSubtitle: "LNCHTime · Vermont · July 4th Weekend",

  /* ---- SCORE COLLECTION ----------------------------------
     Pick ONE (or neither — see README).

     web3formsKey : free key from https://web3forms.com
                    (enter your email, they send you a key —
                    no account needed). Each judge's verdict
                    lands in your inbox, pre-tallied.

     formspreeId  : alternative — the ID from a form at
                    https://formspree.io (e.g. "mqkrzabc").
                    Gives you a dashboard + CSV export.

     Leave BOTH as "" and the site falls back to a
     copy-to-clipboard + email button using fallbackEmail.
  ----------------------------------------------------------- */
  web3formsKey: "b4189c04-b4dc-43b8-bbe2-1e2a33df70fe",
  formspreeId: "",
  fallbackEmail: "hopkinsc4@gmail.com",

  /* ---- THE FIVE FRAMES ------------------------------------
     Drop images into a /photos folder next to index.html.
     a = Photo A, b = Photo B for that frame. Keep your own
     selects key of who's who — the site never shows names.
     Tip: shuffle who is A/B between frames for truly blind
     judging.
  ----------------------------------------------------------- */
  frames: [
    {
      place: "Underhill State Park",
      city: "Underhill",
      time: "8:15 AM",
      theme: "Texture & Detail",
      prompt: "Go small. Moss, ferns, bark, stone, and the grain of light coming through the canopy.",
      a: "photos/f1a.jpg",
      b: "photos/f1b.jpg"
    },
    {
      place: "Old Red Mill",
      city: "Jericho",
      time: "10:00 AM",
      theme: "Motion",
      prompt: "Slow the shutter. Let the Browns River blur against the old mill and the dam.",
      a: "photos/f2a.jpg",
      b: "photos/f2b.jpg"
    },
    {
      place: "Old Round Church",
      city: "Richmond",
      time: "11:15 AM",
      theme: "Lines & Symmetry",
      prompt: "Sixteen sides, built in 1813. Find the geometry — inside or out.",
      a: "photos/f3a.jpg",
      b: "photos/f3b.jpg"
    },
    {
      place: "Niquette Bay",
      city: "Colchester",
      time: "1:30 PM",
      theme: "Landscape & Light",
      prompt: "The wide view. Cove, canopy, and Lake Champlain through the trees.",
      a: "photos/f4a.jpg",
      b: "photos/f4b.jpg"
    },
    {
      place: "Allen Point Causeway",
      city: "South Hero",
      time: "7:00 PM · Golden Hour",
      theme: "Golden Hour",
      prompt: "One frame: Golden light, sunset, the last light over open water.",
      a: "photos/f5a.jpg",
      b: "photos/f5b.jpg"
    }
  ]
};
