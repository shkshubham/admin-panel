export function renderFields(field) {
    return (
        <div>
            <label>{field.label}</label>
            <Field {...field.input} type={field.type} placeholder={field.label} />
            <Col xs={12} className="error">
                <span>{field.meta.touched ? field.meta.error : ''}</span>
            </Col>
        </div>

    )
}