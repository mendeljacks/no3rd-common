export function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaeeeeiiiioooouuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes

    return str
}

export const category_to_smart_collection = no3rd_category => {
    return {
        title: no3rd_category.label,
        handle: string_to_slug(no3rd_category.label),
        disjunctive: false, //disjunctive = or
        ...(no3rd_category.image_url
            ? {
                  image: {
                      src: no3rd_category.image_url,
                      alt: string_to_slug(no3rd_category.label)
                  }
              }
            : {}),
        rules: [
            {
                column: 'variant_inventory',
                relation: 'greater_than',
                condition: '0'
            }
        ],
        published: !!no3rd_category.visible
    }
}
