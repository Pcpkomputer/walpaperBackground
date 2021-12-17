const endpoint = "https://www.appdesignmaker.com/api";

export async function get_templates_by_name(slug){
    try {
        let request = await fetch(`${endpoint}/templates/lists/${slug}`);
        let response = await request.json();
        return {
            success:true,
            data: response.data
        }
    } catch (error) {
        return {
            success:false,
            message:error
        }
    }
}

export async function get_category_templates(id){
    try {
        let request = await fetch(`${endpoint}/templates/category?category_id=${id}`);
        let response = await request.json();
        return {
            success:true,
            data: response.data
        }
    } catch (error) {
        return {
            success:false,
            message:error
        }
    }
}

export async function get_detail_templates_by_id(id){
    try {
        let request = await fetch(`${endpoint}/templates/detail/${id}`);
        let response = await request.json();
        return {
            success:true,
            data: response.data
        }
    } catch (error) {
        return {
            success:false,
            message:error
        }
    }
}