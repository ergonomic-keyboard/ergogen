// M2 Mounting Hole (2.2mm drill, no copper)
// For securing PCB to frame with M2 screws + standoffs

module.exports = {
  params: {
    designator: 'MH',
  },
  body: p => {
    return `
      (module MountingHole_M2 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      (fp_text reference "${p.ref}" (at 0 -2.5) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.Fab) hide (effects (font (size 1 1) (thickness 0.15))))

      ${'' /* hole */}
      (pad "" np_thru_hole circle (at 0 0) (size 2.2 2.2) (drill 2.2) (layers *.Cu *.Mask))

      ${'' /* courtyard */}
      (fp_circle (center 0 0) (end 2 0) (layer F.CrtYd) (width 0.05))
      (fp_circle (center 0 0) (end 2 0) (layer F.SilkS) (width 0.1))
      )
    `
  }
}
