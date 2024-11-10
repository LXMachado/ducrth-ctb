export const TemplateInvitationToOrganization = `
<Card.Header>
  <h2>Welcome to CTB</h2>
  <hr />
</Card.Header>

<Card.Body>
  <p>You have been invited to join {{ organization_name }}.</p>
  <p>
    <a href="{{ url_invitation }}" target="_blank">Accept Invitation</a>
  </p>
</Card.Body>

<Card.Footer>
  <p>Sent by CTB</p>
</Card.Footer>
  `.trim()